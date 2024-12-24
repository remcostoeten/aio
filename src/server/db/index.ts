import { createSupabaseAdapter } from './adapter'

// Export the database interface
export type { DatabaseAdapter } from './adapter'

// Export the current database implementation
export const db = createSupabaseAdapter()