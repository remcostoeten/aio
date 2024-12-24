# Authentication Migration Guide

## Current Architecture (Supabase)

The current authentication system uses Supabase for:
- User management
- Session handling
- OAuth providers
- Email/password authentication

## Target Architecture (Custom JWT + SQLite)

The new system will use:
- SQLite with Prisma for data storage
- Custom JWT implementation for sessions
- Function-based architecture for maintainability
- Provider-agnostic design

## Database Schema

```prisma
// prisma/schema.prisma
model User {
  id            String      @id @default(uuid())
  email         String      @unique
  passwordHash  String?     // Nullable for OAuth-only users
  provider      String?     // 'email', 'github', 'google', etc.
  providerId    String?     // External provider's user ID
  sessions      Session[]
  profile       Profile?
  createdAt     DateTime    @default(now())
  updatedAt     DateTime    @updatedAt
}

model Session {
  id        String   @id @default(uuid())
  userId    String
  token     String   @unique
  expiresAt DateTime
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  createdAt DateTime @default(now())
}

model Profile {
  id              String   @id @default(uuid())
  userId          String   @unique
  displayName     String?
  avatarUrl       String?
  user            User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}
```

## Core Authentication Types

```typescript
// src/core/auth/types.ts
export interface AuthUser {
  id: string
  email: string
  provider?: string
  profile?: UserProfile
}

export interface AuthSession {
  token: string
  expiresAt: Date
}

export interface AuthResult {
  user: AuthUser
  session: AuthSession
}

export interface AuthError extends Error {
  code: string
  statusCode: number
}
```

## Provider-Agnostic Auth Interface

```typescript
// src/core/auth/interface.ts
export interface AuthAdapter {
  // Core authentication
  signIn: (email: string, password: string) => Promise<AuthResult>
  signUp: (email: string, password: string) => Promise<AuthResult>
  signOut: (token: string) => Promise<void>
  
  // Session management
  createSession: (userId: string) => Promise<AuthSession>
  validateSession: (token: string) => Promise<boolean>
  refreshSession: (token: string) => Promise<AuthSession>
  
  // User management
  getUser: (userId: string) => Promise<AuthUser | null>
  updateUser: (userId: string, data: Partial<AuthUser>) => Promise<AuthUser>
  deleteUser: (userId: string) => Promise<void>
  
  // OAuth
  handleOAuthCallback: (provider: string, code: string) => Promise<AuthResult>
}
```

## SQLite Implementation

```typescript
// src/core/auth/adapters/sqlite.ts
import { PrismaClient } from '@prisma/client'
import { hash, verify } from 'argon2'
import { sign, verify as verifyJwt } from 'jsonwebtoken'
import type { AuthAdapter } from '../interface'

const JWT_SECRET = process.env.JWT_SECRET!
const prisma = new PrismaClient()

export function createSQLiteAdapter(): AuthAdapter {
  return {
    async signIn(email, password) {
      const user = await prisma.user.findUnique({ 
        where: { email },
        include: { profile: true }
      })
      
      if (!user?.passwordHash) {
        throw new Error('Invalid credentials')
      }
      
      const valid = await verify(user.passwordHash, password)
      if (!valid) {
        throw new Error('Invalid credentials')
      }
      
      const session = await this.createSession(user.id)
      
      return {
        user: {
          id: user.id,
          email: user.email,
          profile: user.profile || undefined
        },
        session
      }
    },

    async createSession(userId) {
      const token = sign({ sub: userId }, JWT_SECRET, { 
        expiresIn: '7d' 
      })
      
      const expiresAt = new Date()
      expiresAt.setDate(expiresAt.getDate() + 7)
      
      await prisma.session.create({
        data: {
          userId,
          token,
          expiresAt
        }
      })
      
      return { token, expiresAt }
    },

    async validateSession(token) {
      try {
        const session = await prisma.session.findUnique({
          where: { token }
        })
        
        if (!session || session.expiresAt < new Date()) {
          return false
        }
        
        return true
      } catch {
        return false
      }
    }
    
    // ... implement other methods
  }
}
```

## Migration Strategy

1. **Preparation**
   - Set up Prisma with SQLite
   - Create database schema
   - Implement SQLite adapter
   - Add feature flags for gradual rollout

2. **Data Migration**
   ```typescript
   // scripts/migrate-users.ts
   async function migrateUsers() {
     const supabaseUsers = await supabase.auth.admin.listUsers()
     
     for (const user of supabaseUsers) {
       await prisma.user.create({
         data: {
           id: user.id,
           email: user.email,
           provider: user.app_metadata.provider,
           providerId: user.app_metadata.provider_id,
           profile: {
             create: {
               displayName: user.user_metadata.full_name,
               avatarUrl: user.user_metadata.avatar_url
             }
           }
         }
       })
     }
   }
   ```

3. **Testing**
   - Run both systems in parallel
   - Validate all auth flows
   - Test session management
   - Verify OAuth providers

4. **Rollout**
   ```typescript
   // src/core/auth/config.ts
   export const authConfig = {
     useNewAuth: process.env.USE_NEW_AUTH === 'true',
     providers: {
       github: true,
       google: true,
       discord: true,
       hotmail: true
     }
   }
   ```

## Best Practices

1. **Security**
   - Use argon2 for password hashing
   - Implement rate limiting
   - Set secure cookie options
   - Use CSRF protection
   - Validate all inputs

2. **Error Handling**
   ```typescript
   // src/core/auth/errors.ts
   export class AuthError extends Error {
     constructor(
       message: string,
       public code: string,
       public statusCode: number
     ) {
       super(message)
     }
   }
   
   export const AuthErrorCodes = {
     INVALID_CREDENTIALS: 'auth/invalid-credentials',
     SESSION_EXPIRED: 'auth/session-expired',
     RATE_LIMITED: 'auth/rate-limited'
   } as const
   ```

3. **Session Management**
   - Use secure token generation
   - Implement proper expiration
   - Clean up expired sessions
   - Allow multiple sessions per user

4. **Type Safety**
   - Use TypeScript throughout
   - Define clear interfaces
   - Validate data at runtime
   - Use Zod for schema validation

## Example Usage

```typescript
// src/shared/hooks/use-auth.ts
export function useAuth() {
  const auth = useAuthStore()
  const adapter = createSQLiteAdapter()
  
  const signIn = async (email: string, password: string) => {
    try {
      const result = await adapter.signIn(email, password)
      auth.setUser(result.user)
      auth.setSession(result.session)
    } catch (error) {
      handleAuthError(error)
    }
  }
  
  // ... other auth methods
  
  return {
    user: auth.user,
    signIn,
    signOut,
    // ... other methods
  }
}
```