"use client"

import { motion } from 'framer-motion'
import { X, Tag, GitCommit } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'
import FileChanges from './file-changes'

type ReleaseDetailsProps = {
  release: any
  onClose: () => void
}

export default function ReleaseDetails({ release, onClose }: ReleaseDetailsProps) {
  return (
    <div className="max-h-[85vh] overflow-auto">
      <div className="sticky top-0 bg-surface/95 backdrop-blur-sm border-b border-border/50 p-6 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <Tag className="w-6 h-6 text-brand" />
            <h2 className="text-xl font-semibold text-white">
              {release.name || release.tag_name}
            </h2>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-400">
            {release.author && (
              <motion.div 
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <img
                  src={release.author.avatar_url}
                  alt={release.author.login}
                  className="w-5 h-5 rounded-full ring-2 ring-brand/20"
                />
                <span>{release.author.login}</span>
                <span>•</span>
              </motion.div>
            )}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2"
            >
              <GitCommit className="w-4 h-4" />
              <code className="text-xs bg-brand/10 px-2 py-1 rounded-full">
                {release.target_commitish.slice(0, 7)}
              </code>
            </motion.div>
            <span>•</span>
            <motion.time
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              published {formatDistanceToNow(new Date(release.published_at), { addSuffix: true })}
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
          dangerouslySetInnerHTML={{ __html: release.body_html }}
        />

        {release.assets && release.assets.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 space-y-4"
          >
            <h3 className="text-lg font-medium text-white">Assets</h3>
            <div className="space-y-2">
              {release.assets.map((asset: any) => (
                <motion.div
                  key={asset.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center justify-between p-3 rounded-lg bg-surface-lighter"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-300">
                      {asset.name}
                    </span>
                    <span className="text-xs text-gray-500">
                      {(asset.size / 1024).toFixed(1)} KB
                    </span>
                  </div>
                  <a
                    href={asset.browser_download_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-brand hover:text-brand/80 transition-colors"
                  >
                    Download
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex justify-end"
        >
          <a
            href={release.html_url}
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
