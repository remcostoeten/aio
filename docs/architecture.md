# Architecture Overview

## Feature-Based Organization

Our codebase follows a feature-first organization pattern where each feature is self-contained with its own API layer, components, and types.

### Directory Structure

```
src/
├── features/           # Feature modules
│   ├── snippets/      # Snippet management
│   │   ├── api/
│   │   │   ├── queries.ts    # React Query hooks
│   │   │   ├── mutations.ts  # Data mutations
│   │   │   └── types.ts      # Feature types
│   │   ├── components/
│   │   └── index.ts         # Public API
│   ├── folders/       # Folder organization
│   ├── versions/      # Version tracking
│   ├── search/        # Search functionality
│   └── auth/          # Authentication
├── services/          # Database & external services
│   └── database/      # Database abstraction
│       ├── client.ts  # Database client
│       ├── types.ts   # Core types
│       └── {feature}.ts # Feature-specific operations
└── shared/           # Shared utilities & components
```

## Database Layer

### Database Agnostic Design

The database layer is designed to be swappable:

```typescript
// services/database/client.ts
export const db = createClient<Database>({...})

// services/database/snippets.ts
export const snippetDb = {
  list: async (userId: string) => {...},
  create: async (data: CreateSnippetData) => {...}
}
```

### Type Safety

We maintain database-agnostic types:

```typescript
// services/database/types.ts
export type Snippet = {
    id: string
    title: string
    content: string
    // ...
}
```

## Feature Pattern

Each feature follows this pattern:

### 1. Database Operations

```typescript
// services/database/{feature}.ts
export const featureDb = {
  list: async () => {...},
  create: async (data: CreateData) => {...}
}
```

### 2. React Query Hooks

```typescript
// features/{feature}/api/queries.ts
export const useFeatureData = () => {
    return useQuery({
        queryKey: ['feature'],
        queryFn: () => featureDb.list(),
    })
}
```

### 3. Components

```typescript
// features/{feature}/components/feature-component.tsx
export const FeatureComponent = () => {
  const { data } = useFeatureData()
  return <div>{/* Component JSX */}</div>
}
```

## Current Features

### 1. Snippets

- CRUD operations for code snippets
- Folder organization
- Version history

### 2. Search

- Full-text search using PostgreSQL
- Search vector optimization
- Real-time search results

### 3. Versions

- Version history tracking
- Diff viewing
- Version restoration

### 4. Authentication

- User management
- Session handling
- Protected routes

## Migration Strategy

When migrating to a different database:

1. Update `services/database/client.ts`
2. Implement new database operations
3. Keep feature-level code unchanged

Example:

```typescript
// Current Supabase implementation
const data = await db.from('snippets').select('*')

// Future Drizzle implementation
const data = await db.select().from(snippets)
```

## Complete Feature Walkthrough

Let's walk through creating a complete feature from scratch using our "snippets" feature as an example:

### 1. Define Database Types

```typescript
// services/database/types.ts
export type Snippet = {
    id: string
    title: string
    content: string
    language: string
    user_id: string
    folder_id?: string
    labels: string[]
    created_at: string
    updated_at: string
}

export type CreateSnippetData = Omit<
    Snippet,
    'id' | 'created_at' | 'updated_at'
>
export type UpdateSnippetData = Partial<CreateSnippetData>
```

### 2. Create Database Operations

```typescript
// services/database/snippets.ts
export const snippetDb = {
    list: async (userId: string) => {
        const { data, error } = await db
            .from('snippets')
            .select('*')
            .eq('user_id', userId)
            .order('updated_at', { ascending: false })

        if (error) throw error
        return data as Snippet[]
    },

    create: async (snippet: CreateSnippetData) => {
        const { data, error } = await db
            .from('snippets')
            .insert(snippet)
            .select()
            .single()

        if (error) throw error
        return data as Snippet
    },
}
```

### 3. Implement Feature Queries

```typescript
// features/snippets/api/queries.ts
export const useSnippets = (userId: string) => {
    return useQuery({
        queryKey: ['snippets', userId],
        queryFn: () => snippetDb.list(userId),
    })
}
```

### 4. Implement Feature Mutations

```typescript
// features/snippets/api/mutations.ts
export const useCreateSnippet = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (data: CreateSnippetData) => snippetDb.create(data),
        onSuccess: () => {
            queryClient.invalidateQueries(['snippets'])
        },
    })
}
```

### 5. Create UI Components

```typescript
// features/snippets/components/snippet-card.tsx
type SnippetCardProps = {
  snippet: Snippet
  onClick: () => void
}

export const SnippetCard = ({ snippet, onClick }: SnippetCardProps) => {
  return (
    <div onClick={onClick} className="p-4 rounded-lg hover:bg-secondary/50">
      <h3>{snippet.title}</h3>
      <div className="text-sm text-muted-foreground">{snippet.language}</div>
    </div>
  )
}
```

### 6. Export Public API

```typescript
// features/snippets/index.ts
export { useSnippets } from './api/queries'
export { useCreateSnippet } from './api/mutations'
export { SnippetCard } from './components/snippet-card'
export type { Snippet } from '@/services/database/types'
```

### 7. Use in Application

```typescript
// app/snippets/page.tsx
import { useSnippets, useCreateSnippet, SnippetCard } from '@/features/snippets'

export default function SnippetsPage() {
  const { data: snippets } = useSnippets(userId)
  const createSnippet = useCreateSnippet()

  return (
    <div>
      {snippets?.map(snippet => (
        <SnippetCard
          key={snippet.id}
          snippet={snippet}
          onClick={() => handleSnippetClick(snippet)}
        />
      ))}
    </div>
  )
}
```

This pattern ensures:

- Clear separation of concerns
- Type safety throughout the feature
- Database agnostic implementation
- Consistent API patterns
- Reusable components
