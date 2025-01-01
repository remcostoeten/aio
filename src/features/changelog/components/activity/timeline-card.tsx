import type { Commit, Issue, PullRequest, Release } from '../../types'
import { CommitDetails, IssueDetails, PullRequestDetails, ReleaseDetails } from '../details' 

type Activity = {
  type: 'release'
  date: Date
  data: {
    body: string | null
    id: number
    name: string
    html_url: string
    author: { login: string; avatar_url: string; html_url: string }
    tag_name: string
    created_at: string
    published_at: string
    prerelease: boolean
    draft: boolean
  }
} | {
  type: 'pr'
  date: Date
  data: PullRequest
} | {
  type: 'issue'
  date: Date
  data: Issue
} | {
  type: 'commit'
  date: Date
  data: Commit
} 
