import { z } from 'zod'
import { schemas } from './github.schemas'
import type { GitHubData } from '../types'

export class GitHubService {
  private repoOwner: string
  private repoName: string

  constructor(repoOwner: string, repoName: string) {
    this.repoOwner = repoOwner
    this.repoName = repoName
  }

  private async fetchFromGitHub<T>(endpoint: string, schema: z.ZodType<T>): Promise<T> {
    const response = await fetch(`https://api.github.com/repos/${this.repoOwner}/${this.repoName}${endpoint}`)
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`)
    }
    const data = await response.json()
    return schema.parse(data)
  }

  async getAllActivityData(): Promise<GitHubData> {
    const [commits, pullRequests, releases, issues] = await Promise.all([
      this.fetchFromGitHub('/commits?per_page=30', z.array(schemas.commitSchema)),
      this.fetchFromGitHub('/pulls?state=all&per_page=30', z.array(schemas.pullRequestSchema)),
      this.fetchFromGitHub('/releases?per_page=10', z.array(schemas.releaseSchema)),
      this.fetchFromGitHub('/issues?state=all&per_page=30', z.array(schemas.issueSchema))
    ])

    return {
      commits,
      pullRequests,
      releases,
      issues
    }
  }
}