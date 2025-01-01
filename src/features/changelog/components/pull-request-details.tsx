"use client"

import { motion } from 'framer-motion'
import { X, GitPullRequest } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'
import FileChanges from './file-changes'

type PullRequestDetailsProps = {
  pullRequest: any
  onClose: () => void
}

export default function PullRequestDetails({ pullRequest, onClose }: PullRequestDetailsProps) {
  return (
    <div className="max-h-[85vh] overflow-auto">
      <div className="sticky top-0 bg-surface/95 backdrop-blur-sm border-b border-border/50 p-6 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <GitPullRequest className="w-6 h-6 text-purple-500" />
            <h2 className="text-xl font-semibold text-white">
              {pullRequest.title}
            </h2>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <motion.div 
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <img
                src={pullRequest.user.avatar_url}
                alt={pullRequest.user.login}
                className="w-5 h-5 rounded-full ring-2 ring-brand/20"
              />
              <span>{pullRequest.user.login}</span>
              <span>•</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              #{pullRequest.number}
            </motion.div>
            <span>•</span>
            <motion.time
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              merged {formatDistanceToNow(new Date(pullRequest.merged_at), { addSuffix: true })}
            </motion.time>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: pullRequest.body_html }}
        />

        {pullRequest.files && <FileChanges files={pullRequest.files} />}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex justify-end"
        >
          <a
            href={pullRequest.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-brand hover:bg-brand/80 rounded-md transition-colors"
          >
            View on GitHub
          </a>
        </motion.div>
      </div>
    </div>
  )
} 
