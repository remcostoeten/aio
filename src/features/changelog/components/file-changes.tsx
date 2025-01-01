"use client"

import { motion } from 'framer-motion'
import { File, FileCode, FileText, Folder } from 'lucide-react'

type FileChange = {
  filename: string
  additions: number
  deletions: number
  status?: string
  previous_filename?: string
}

type FileChangesProps = {
  files: FileChange[]
}

export default function FileChanges({ files }: FileChangesProps) {
  const getFileIcon = (filename: string) => {
    if (filename.endsWith('.md')) return <FileText className="w-4 h-4" />
    if (filename.endsWith('.ts') || filename.endsWith('.tsx') || filename.endsWith('.js')) {
      return <FileCode className="w-4 h-4" />
    }
    return <File className="w-4 h-4" />
  }

  const getChangeColor = (status?: string) => {
    switch (status) {
      case 'added': return 'text-green-400'
      case 'removed': return 'text-red-400'
      case 'modified': return 'text-yellow-400'
      default: return 'text-blue-400'
    }
  }

  const totalChanges = files.reduce((acc, file) => acc + file.additions + file.deletions, 0)
  const maxChanges = Math.max(...files.map(file => file.additions + file.deletions))

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="mt-8 space-y-4"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-white">Changed Files</h3>
        <div className="text-sm text-gray-400">
          {files.length} files with {totalChanges} changes
        </div>
      </div>

      <div className="space-y-2">
        {files.map((file, index) => (
          <motion.div
            key={file.filename}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="group p-3 rounded-lg bg-surface-lighter hover:bg-surface-lighter/80 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className={`${getChangeColor(file.status)}`}>
                {getFileIcon(file.filename)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-300 truncate">
                    {file.filename}
                  </span>
                  {file.previous_filename && (
                    <span className="text-xs text-gray-500">
                      (renamed from {file.previous_filename})
                    </span>
                  )}
                </div>
                <div className="mt-1 h-1 rounded-full bg-surface overflow-hidden">
                  <div 
                    className="h-full flex"
                    style={{
                      width: `${((file.additions + file.deletions) / maxChanges) * 100}%`
                    }}
                  >
                    {file.additions > 0 && (
                      <div 
                        className="h-full bg-green-400/50"
                        style={{
                          width: `${(file.additions / (file.additions + file.deletions)) * 100}%`
                        }}
                      />
                    )}
                    {file.deletions > 0 && (
                      <div 
                        className="h-full bg-red-400/50"
                        style={{
                          width: `${(file.deletions / (file.additions + file.deletions)) * 100}%`
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <span className="text-green-400">+{file.additions}</span>
                <span className="text-red-400">-{file.deletions}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
} 
