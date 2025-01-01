"use client"

import { useEffect, useState } from 'react'
import ActivityTimeline from '../components/activity/activity-timeline'
import type { GitHubData } from '../types'

export default function ChangelogPage() {
  const [data, setData] = useState<GitHubData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const owner = 'remcostoeten'
    const repo = 'remcostoeten'
    const token = import.meta.env.VITE_GITHUB_TOKEN

    console.log('Token available:', !!token)

    const headers = {
      ...(token ? { Authorization: `token ${token}` } : {}),
      Accept: 'application/vnd.github.v3+json',
    }

    Promise.all([
      fetch(`https://api.github.com/repos/${owner}/${repo}/releases`, { headers }),
      fetch(`https://api.github.com/repos/${owner}/${repo}/pulls?state=all`, { headers }),
      fetch(`https://api.github.com/repos/${owner}/${repo}/issues?state=all`, { headers }),
      fetch(`https://api.github.com/repos/${owner}/${repo}/commits`, { headers })
    ])
      .then(async responses => {
        responses.forEach(async (res, i) => {
          console.log(`Endpoint ${i} status:`, res.status)
          if (!res.ok) {
            const text = await res.text()
            console.error(`Endpoint ${i} error:`, text)
          }
        })

        return Promise.all(responses.map(res => res.ok ? res.json() : []))
      })
      .then(([releases, pulls, issues, commits]) => {
        console.log('Data received:', { releases, pulls, issues, commits })
        setData({
          releases: releases || [],
          pullRequests: pulls || [],
          issues: (issues || []).filter((issue: any) => !issue.pull_request),
          commits: commits || []
        })
        setLoading(false)
      })
      .catch(err => {
        console.error('Failed to fetch GitHub data:', err)
        setData({
          releases: [],
          pullRequests: [],
          issues: [],
          commits: []
        })
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-brand"></div>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <p className="text-gray-400">No data available</p>
      </div>
    )
  }

  return (
    <div className="space-y-12 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-white mb-2">
          Project Timeline
        </h1>
        <p className="text-gray-400">
          A chronological view of all project activity
        </p>
      </div>

      <ActivityTimeline data={data} />
    </div>
  )
}
