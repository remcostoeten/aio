export type Author = {
  login: string
  avatar_url: string
  html_url: string
}

export type Release = {
  html_url: string
  name: string | null
  tag_name: string
  published_at: string
  author: Author
  body: string | null
  id: number
  created_at: string
  prerelease: boolean
  draft: boolean
}

export type PullRequest = {
  number: number
  html_url: string
  title: string
  merged_at: string | null
  user: Author
  body: string | null
  body_html?: string
  labels: Array<{
    name: string
    color: string
  }>
}

export type Issue = {
  number: number
  html_url: string
  title: string
  created_at: string
  user: Author
  body: string | null
  body_html?: string
  labels: Array<{
    name: string
    color: string
  }>
}

export type Commit = {
  sha: string
  html_url: string
  commit: {
    message: string
    author: {
      date: string
      name: string
      email: string
    }
  }
  author: Author | null
}

export type GitHubData = {
  releases: Release[]
  pullRequests: PullRequest[]
  issues: Issue[]
  commits: Commit[]
} 
