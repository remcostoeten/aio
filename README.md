# DevTools AIO (All-in-One)

A comprehensive development toolkit built with React, TypeScript, and modern web technologies.

## Features

- 📝 Code Snippet Management
- 🎨 Syntax Highlighting
- 🔄 Version Control
- 🏷️ Tag Organization
- 🔍 Full-Text Search
- 📱 Responsive Design

## Tech Stack

- React + TypeScript
- TanStack Router
- Zustand for State Management
- Drizzle ORM
- Tailwind CSS + shadcn/ui
- Monaco Editor

## Project Structure

```
src/
├── features/           # Feature-based modules
│   ├── auth/          # Authentication
│   ├── snippets/      # Code snippets
│   └── admin/         # Admin features
├── shared/            # Shared utilities
│   ├── components/    # Reusable components
│   ├── hooks/         # Custom hooks
│   ├── theme/         # Theme configuration
│   └── helpers/       # Utility functions
└── server/            # Server-side code
    ├── db/            # Database configuration
    └── actions/       # Server actions
```

## Development Standards

### Code Style

- No semicolons
- Single quotes
- 100 character line limit
- 2 space indentation
- Type-safe code
- Feature-based architecture

### Component Guidelines

- Default exports for pages
- Named exports for components
- JSDoc documentation
- Proper type definitions
- Small, focused components

### State Management

- Zustand for global state
- React Query for server state
- Local state when possible
- Proper type inference

## Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/devtools-aio.git
    ```

2. Install dependencies:

    ```bash
    pnpm install
    ```

3. Set up environment variables:

    ```bash
    cp .env.example .env
    ```

4. Start development server:
    ```bash
    pnpm dev
    ```

## Contributing

1. Follow the code style guidelines
2. Write meaningful commit messages
3. Add proper documentation
4. Test your changes
5. Create a pull request

## License

MIT License - See [LICENSE](LICENSE) for details
