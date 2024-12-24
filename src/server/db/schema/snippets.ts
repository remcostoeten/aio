import { z } from 'zod'

export const snippetSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1),
  code: z.string(),
  language: z.string(),
  description: z.string().optional(),
  user_id: z.string().uuid(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
  folder_id: z.string().uuid().optional(),
  is_public: z.boolean().default(false),
})

export type Snippet = z.infer<typeof snippetSchema>