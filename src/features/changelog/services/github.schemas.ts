import { z } from 'zod'

const authorSchema = z.object({
  login: z.string(),
  avatar_url: z.string(),
  html_url: z.string()
})

const commitSchema = z.object({
  sha: z.string(),
  commit: z.object({
    message: z.string(),
    author: z.object({
      name: z.string(),
      date: z.string(),
      email: z.string()
    })
  }),
  html_url: z.string(),
  author: authorSchema.nullable(),
  stats: z.object({
    additions: z.number(),
    deletions: z.number(),
    total: z.number()
  }).optional()
})

const pullRequestSchema = z.object({
  number: z.number(),
  title: z.string(),
  merged_at: z.string().nullable(),
  html_url: z.string(),
  user: authorSchema,
  body: z.string().nullable(),
  labels: z.array(z.object({
    name: z.string(),
    color: z.string()
  })),
  additions: z.number(),
  deletions: z.number(),
  changed_files: z.number()
})

const releaseSchema = z.object({
  id: z.number(),
  tag_name: z.string(),
  name: z.string(),
  body: z.string().nullable(),
  created_at: z.string(),
  published_at: z.string(),
  author: authorSchema,
  prerelease: z.boolean(),
  draft: z.boolean(),
  html_url: z.string()
})

const issueSchema = z.object({
  number: z.number(),
  title: z.string(),
  state: z.string(),
  html_url: z.string(),
  user: authorSchema,
  body: z.string().nullable(),
  created_at: z.string(),
  closed_at: z.string().nullable(),
  labels: z.array(z.object({
    name: z.string(),
    color: z.string(),
    description: z.string().nullable()
  }))
})

export const schemas = {
  authorSchema,
  commitSchema,
  pullRequestSchema,
  releaseSchema,
  issueSchema
}