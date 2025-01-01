"use client"

import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'
import FileChanges from './file-changes'

type CommitDetailsProps = {
  commit: any
  onClose: () => void
}

export default function CommitDetails({ commit, onClose }: CommitDetailsProps) {
  return (
    <div className="max-h-[85vh] overflow-auto">
      <div className="sticky top-0 bg-surface/95 backdrop-blur-sm border-b border-border/50 p-6 flex items-start justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white mb-2">
            {commit.commit.message.split('\n')[0]}
          </h2>
          <div className="flex items-center gap-3 text-sm text-gray-400">
            {commit.author && (
              <motion.div 
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <img
                  src={commit.author.avatar_url}
                  alt={commit.author.login}
                  className="w-5 h-5 rounded-full ring-2 ring-brand/20"
                />
                <span>{commit.author.login}</span>
                <span>•</span>
              </motion.div>
            )}
            <motion.time
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {formatDistanceToNow(new Date(commit.commit.author.date), { addSuffix: true })}
            </motion.time>
            <span>•</span>
            <motion.code 
              className="text-xs bg-brand/10 px-2 py-1 rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {commit.sha.slice(0, 7)}
            </motion.code>
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
        >
          {commit.commit.message.split('\n').slice(1).join('\n')}
        </motion.div>

        {commit.files && <FileChanges files={commit.files} />}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex justify-end"
        >
          <a
            href={commit.html_url}
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
