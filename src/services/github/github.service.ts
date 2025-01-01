import { z } from 'zod'
import { schemas } from './github.schemas'
import type { Commit, Issue, PullRequest, Release } from './github.types'

export class GitHubService {
  private repoOwner: string
  private repoName: string

  constructor(repoOwner: string, repoName: string) {
    this.repoOwner = repoOwner
    this.repoName = repoName
  }

  private async fetchFromGitHub<T>(endpoint: string, schema: z.ZodType<T>): Promise<T> {
    const response = await fetch(`https://api.github.com/repos/${this.repoOwner}/${this.repoName}${endpoint}`)
    const data = await response.json()
    return schema.parse(data)
  }

  async getCommits(perPage = 30): Promise<Commit[]> {
    return this.fetchFromGitHub(`/commits?per_page=${perPage}`, z.array(schemas.commitSchema))
  }

  async getPullRequests(perPage = 30): Promise<PullRequest[]> {
    return this.fetchFromGitHub(`/pulls?state=all&per_page=${perPage}`, z.array(schemas.pullRequestSchema))
  }

  async getReleases(perPage = 10): Promise<Release[]> {
    return this.fetchFromGitHub(`/releases?per_page=${perPage}`, z.array(schemas.releaseSchema))
  }

  async getIssues(perPage = 30): Promise<Issue[]> {
    return this.fetchFromGitHub(`/issues?state=all&per_page=${perPage}`, z.array(schemas.issueSchema))
  }

  async getAllActivityData() {
    const [commits, pullRequests, releases, issues] = await Promise.all([
      this.getCommits(),
      this.getPullRequests(),
      this.getReleases(),
      this.getIssues()
    ])

    return {
      commits,
      pullRequests,
      releases,
      issues
    }
  }
}