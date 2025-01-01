"use client"

import { motion } from 'framer-motion'
import type { GitHubData } from '../../types'
import TimelineCard from '../timeline-card'

type ActivityTimelineProps = {
  data: GitHubData
}

type Activity = {
  type: 'release' | 'pr' | 'issue' | 'commit'
  date: Date
  data: any
}

export default function ActivityTimeline({ data }: ActivityTimelineProps) {
  const activities = [
    ...data.releases.map(release => ({
      type: 'release' as const,
      date: new Date(release.published_at),
      data: release
    })).filter(item => !isNaN(item.date.getTime())),
    
    ...data.pullRequests.map(pr => ({
      type: 'pr' as const, 
      date: new Date(pr.merged_at || ''),
      data: pr
    })).filter(pr => pr.data.merged_at && !isNaN(pr.date.getTime())),
    
    ...data.issues.map(issue => ({
      type: 'issue' as const,
      date: new Date(issue.created_at),
      data: issue 
    })).filter(item => !isNaN(item.date.getTime())),
    
    ...data.commits.map(commit => ({
      type: 'commit' as const,
      date: new Date(commit.commit.author?.date || ''),
      data: commit
    })).filter(item => !isNaN(item.date.getTime()))
  ].sort((a, b) => b.date.getTime() - a.date.getTime())

  return (
    <div className="relative min-h-screen py-12">
      {/* Timeline Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2">
        <motion.div
          className="h-full bg-gradient-to-b from-brand via-brand/50 to-transparent"
          initial={{ height: 0 }}
          animate={{ height: '100%' }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      </div>

      {/* Timeline Items */}
      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div 
          className="space-y-24"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {activities.map((activity, index) => (
            <motion.div
              key={`${activity.type}-${activity.date.getTime()}-${index}`}
              className="relative"
              variants={{
                hidden: { 
                  opacity: 0,
                  y: 50
                },
                visible: { 
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: 'spring',
                    stiffness: 100,
                    damping: 15,
                    mass: 1
                  }
                }
              }}
            >
              {/* Dot */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-brand shadow-lg shadow-brand/20 z-20"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 500,
                  damping: 30,
                  delay: index * 0.2
                }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-brand/30"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />
              </motion.div>

              <div className={`flex items-center gap-8 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}>
                <div className="w-[calc(50%-2rem)]">
                  <TimelineCard activity={activity as Activity} />
                </div>
                <div className="w-[calc(50%-2rem)]" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
} 
