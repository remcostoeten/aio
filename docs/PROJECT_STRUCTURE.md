# Project Structure Documentation

## Overview

This document outlines the project structure and conventions used in our React application. Following these guidelines ensures consistency and maintainability across the codebase.

## Directory Structure

```
src/
├── app/                    # Next.js app router pages
├── components/             # Shared components used across features
├── core/                   # Core application code
│   ├── config/            # Configuration files
│   ├── repositories/      # Data access layer
│   └── types/             # TypeScript type definitions
├── features/              # Feature-based modules
├── server/                # Server-side code
├── services/              # External service integrations
└── shared/                # Shared utilities and components
```

## Key Directories Explained

### `src/components/`

Global components used across multiple features. These should be generic and reusable.

```
components/
├── ui/                    # Base UI components (buttons, inputs, etc.)
├── authentication/        # Auth-related components
└── theme/                # Theme-related components
```

### `src/core/`

Core application code that defines the foundation of the application.

```
core/
├── config/               # Application configuration
│   ├── auth.ts          # Authentication configuration
│   └── feature-flags.ts # Feature flag definitions
├── repositories/        # Data access layer
└── types/              # TypeScript type definitions
```

### `src/features/`

Feature-based modules. Each feature is self-contained with its own components, hooks, and types.

```
features/
├── auth/               # Authentication feature
│   ├── components/     # Feature-specific components
│   ├── hooks/         # Feature-specific hooks
│   └── types/         # Feature-specific types
└── snippets/          # Code snippets feature
    ├── components/
    ├── hooks/
    └── types/
```

### `src/shared/`

Shared utilities and components used across the application.

```
shared/
├── components/         # Shared components
├── helpers/           # Utility functions
├── hooks/             # Custom React hooks
├── layouts/           # Layout components
└── services/          # Service integrations
```

## Key Conventions

### Component Organization

1. Components should be organized by feature when they're feature-specific
2. Shared components go in `src/shared/components/`
3. Base UI components go in `src/shared/components/ui/`

### Imports and Aliases

We use path aliases to make imports cleaner:

```typescript
// Use aliases for imports
import { Button } from '@/shared/components/ui/button'
import { cn } from '@/shared/helpers'
import { useAuth } from '@/shared/hooks/use-auth'
```

### Styling

1. We use Tailwind CSS for styling
2. The `cn()` utility from `@/shared/helpers` should be used for conditional classes
3. Follow the color scheme defined in `tailwind.config.js`

### Data Fetching

1. API calls should be abstracted in the `services` directory
2. Use repositories for data access patterns
3. Supabase queries should be organized in `services/supabase/`

```typescript
// Example service organization
services/
├── supabase/
│   ├── client.ts     # Supabase client configuration
│   ├── queries.ts    # Database queries
│   └── mutations.ts  # Database mutations
```

### Authentication

1. Auth-related components live in `features/auth/`
2. Auth configuration in `core/config/auth.ts`
3. Auth context and hooks in `shared/context/` and `shared/hooks/`

### Feature Organization

Each feature should follow this structure:

```
feature-name/
├── components/        # UI components
├── hooks/            # Feature-specific hooks
├── types/            # TypeScript types
└── index.ts         # Public API
```

### Best Practices

1. **Single Responsibility**: Each file should have one primary purpose
2. **Modularity**: Break down complex components into smaller, focused pieces
3. **Type Safety**: Use TypeScript types and interfaces
4. **Error Handling**: Implement proper error boundaries and error handling
5. **State Management**: Use React Query for server state, Zustand for client state

### File Naming

1. Use kebab-case for file names: `auth-form.tsx`
2. Use PascalCase for component names: `AuthForm`
3. Use camelCase for utilities and hooks: `useAuth`

### Code Organization

1. Place related code close together
2. Extract reusable logic into hooks
3. Keep components focused and small
4. Use TypeScript for type safety

## Adding New Features

When adding a new feature:

1. Create a new directory in `features/`
2. Follow the feature organization structure
3. Export the public API through `index.ts`
4. Keep components focused and small
5. Share reusable code through the `shared/` directory

## Testing

1. Place tests next to the code they test
2. Use meaningful test descriptions
3. Follow the testing patterns established in the project

## Documentation

1. Add JSDoc comments for complex functions
2. Document non-obvious code decisions
3. Keep README files up to date
4. Document API endpoints and data structures

## Conclusion

Following these guidelines ensures:
- Consistent code organization
- Easy navigation
- Maintainable codebase
- Clear separation of concerns
- Scalable architecture

For questions or clarifications, please refer to the team lead or senior developers.