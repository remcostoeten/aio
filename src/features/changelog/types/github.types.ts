import { z } from 'zod'
import { schemas } from '../services/github.schemas'

export type Author = z.infer<typeof schemas.authorSchema>
export type Commit = z.infer<typeof schemas.commitSchema>
export type PullRequest = z.infer<typeof schemas.pullRequestSchema>
export type Release = z.infer<typeof schemas.releaseSchema>
export type Issue = z.infer<typeof schemas.issueSchema>

export interface GitHubData {
  commits: Commit[]
  pullRequests: PullRequest[]
  releases: Release[]
  issues: Issue[]
}