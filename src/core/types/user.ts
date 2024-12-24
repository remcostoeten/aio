```typescript
export interface UserProfile {
  id: string
  userId: string
  displayName: string | null
  bio: string | null
  avatarUrl: string | null
  website: string | null
  location: string | null
  githubUsername: string | null
  twitterUsername: string | null
  createdAt: Date
  updatedAt: Date
}

export interface UpdateUserProfileInput {
  displayName?: string | null
  bio?: string | null
  avatarUrl?: string | null
  website?: string | null
  location?: string | null
  githubUsername?: string | null
  twitterUsername?: string | null
}
```