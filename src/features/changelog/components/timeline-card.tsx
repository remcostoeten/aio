"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { formatDistanceToNow } from 'date-fns'
import { GitBranch, GitCommit, GitPullRequest, Tag, File } from 'lucide-react'
import type { Commit, Issue, PullRequest, Release } from '../../../services/github'
import CommitDetails from './commit-details'
import PullRequestDetails from './pull-request-details'
import IssueDetails from './issue-details'
import ReleaseDetails from './release-details'

type Activity = {
  type: 'release'
  date: Date
  data: Release
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

type TimelineCardProps = {
  activity: Activity
}

export default function TimelineCard({ activity }: TimelineCardProps) {
  const [showDetails, setShowDetails] = useState(false)

  const getIcon = () => {
    switch (activity.type) {
      case 'release':
        return <Tag className="w-5 h-5 text-brand" />
      case 'pr':
        return <GitPullRequest className="w-5 h-5 text-purple-500" />
      case 'issue':
        return <GitBranch className="w-5 h-5 text-blue-500" />
      case 'commit':
        return <GitCommit className="w-5 h-5 text-orange-500" />
    }
  }

  const getTitle = () => {
    switch (activity.type) {
      case 'release':
        return activity.data.name || activity.data.tag_name
      case 'pr':
        return `#${activity.data.number} ${activity.data.title}`
      case 'issue':
        return `#${activity.data.number} ${activity.data.title}`
      case 'commit':
        return activity.data.commit.message.split('\n')[0]
    }
  }

  const getAuthor = () => {
    switch (activity.type) {
      case 'release':
        return activity.data.author
      case 'pr':
        return activity.data.user
      case 'issue':
        return activity.data.user
      case 'commit':
        return activity.data.author
    }
  }

  const getFileChanges = () => {
    switch (activity.type) {
      case 'pr':
        return activity.data.files || []
      case 'commit':
        return activity.data.files || []
      default:
        return []
    }
  }

  const author = getAuthor()
  const files = getFileChanges()

  return (
    <>
      <motion.div
        onClick={() => setShowDetails(true)}
        className="bg-surface/50 backdrop-blur-sm border border-border/50 rounded-lg p-4 cursor-pointer hover:bg-surface/80 transition-colors"
        whileHover={{
          y: -2,
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="relative">
          <div className="flex items-center gap-3 mb-3">
            <motion.div
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              {getIcon()}
            </motion.div>
            <h3 className="font-medium text-white group-hover:text-brand transition-colors">
              {getTitle()}
            </h3>
          </div>

          {author && (
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
              <img
                className="w-5 h-5 rounded-full ring-2 ring-transparent group-hover:ring-brand/30 transition-all"
                src={author.avatar_url}
                alt={author.login}
              />
              <span>{author.login}</span>
              <span>•</span>
              <time>{formatDistanceToNow(activity.date, { addSuffix: true })}</time>
            </div>
          )}

          {files.length > 0 && (
            <div className="mt-3 space-y-1">
              <div className="text-xs text-gray-500 flex items-center gap-2">
                <File className="w-4 h-4" />
                <span>{files.length} files changed</span>
              </div>
              <div className="flex items-center gap-4 text-xs">
                <span className="text-green-400">
                  +{files.reduce((acc, file) => acc + file.additions, 0)}
                </span>
                <span className="text-red-400">
                  -{files.reduce((acc, file) => acc + file.deletions, 0)}
                </span>
              </div>
            </div>
          )}
        </div>
      </motion.div>

      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowDetails(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl bg-surface border border-border/50 rounded-xl overflow-hidden"
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ 
                scale: 1, 
                y: 0, 
                opacity: 1,
                transition: {
                  type: "spring",
                  duration: 0.5,
                  bounce: 0.3
                }
              }}
              exit={{ 
                scale: 0.95,
                y: 20,
                opacity: 0,
                transition: { duration: 0.3 }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-brand/5 to-transparent pointer-events-none" />
              
              {activity.type === 'commit' && (
                <CommitDetails
                  commit={activity.data}
                  onClose={() => setShowDetails(false)}
                />
              )}

              {activity.type === 'pr' && (
                <PullRequestDetails
                  pullRequest={activity.data}
                  onClose={() => setShowDetails(false)}
                />
              )}

              {activity.type === 'issue' && (
                <IssueDetails
                  issue={activity.data}
                  onClose={() => setShowDetails(false)}
                />
              )}

              {activity.type === 'release' && (
                <ReleaseDetails
                  release={activity.data}
                  onClose={() => setShowDetails(false)}
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
