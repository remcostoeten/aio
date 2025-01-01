import { z } from 'zod'

const repoOwner = 'remcostoeten'
const repoName = 'aio'

const authorSchema = z.object({
  login: z.string(),
  avatar_url: z.string(),
  html_url: z.string()
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
  draft: z.boolean()
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
  user: z.object({
    login: z.string(),
    avatar_url: z.string(),
    html_url: z.string()
  }),
  body: z.string().nullable(),
  labels: z.array(z.object({
    name: z.string(),
    color: z.string()
  })),
  additions: z.number(),
  deletions: z.number(),
  changed_files: z.number()
})

export type Commit = z.infer<typeof commitSchema>
export type PullRequest = z.infer<typeof pullRequestSchema>
export type Release = z.infer<typeof releaseSchema>
export type Issue = z.infer<typeof issueSchema>

export async function fetchRepositoryData() {
  const [commits, pullRequests, releases, issues] = await Promise.all([
    fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/commits?per_page=30`).then(r => r.json()),
    fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/pulls?state=all&per_page=30`).then(r => r.json()),
    fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/releases?per_page=10`).then(r => r.json()),
    fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/issues?state=all&per_page=30`).then(r => r.json())
  ])

  return {
    commits: z.array(commitSchema).parse(commits),
    pullRequests: z.array(pullRequestSchema).parse(pullRequests),
    releases: z.array(releaseSchema).parse(releases),
    issues: z.array(issueSchema).parse(issues)
  }
}