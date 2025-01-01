"use client"

import { motion } from 'framer-motion'
import { subDays, format, startOfWeek, eachDayOfInterval } from 'date-fns'
import type { GitHubData } from '../../types'

type ActivityCalendarProps = {
  data: GitHubData
  numWeeks?: number
}

export default function ActivityCalendar({ data, numWeeks = 52 }: ActivityCalendarProps) {
  const today = new Date()
  const startDate = subDays(today, numWeeks * 7)
  
  // Get all activity dates
  const activityDates = [
    ...data.commits.map(commit => new Date(commit.commit.author.date)),
    ...data.pullRequests.filter(pr => pr.merged_at).map(pr => new Date(pr.merged_at!)),
    ...data.issues.map(issue => new Date(issue.created_at)),
    ...data.releases.map(release => new Date(release.published_at))
  ]

  // Create calendar data structure
  const calendarData = eachDayOfInterval({
    start: startDate,
    end: today
  }).map(date => {
    const dayActivity = activityDates.filter(
      activityDate => format(activityDate, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
    )
    return {
      date,
      count: dayActivity.length
    }
  })

  // Group by weeks
  const weekGroups = []
  let currentWeek: typeof calendarData = []

  calendarData.forEach((day) => {
    if (format(day.date, 'E') === 'Sun' && currentWeek.length) {
      weekGroups.push(currentWeek)
      currentWeek = []
    }
    currentWeek.push(day)
  })
  if (currentWeek.length) {
    weekGroups.push(currentWeek)
  }

  // Calculate activity levels
  const maxActivity = Math.max(...calendarData.map(d => d.count))
  const getActivityLevel = (count: number): number => {
    if (count === 0) return 0
    if (maxActivity <= 4) return Math.min(count, 4)
    const normalized = (count / maxActivity) * 4
    return Math.ceil(normalized)
  }

  const getActivityColor = (level: number): string => {
    switch (level) {
      case 0: return 'bg-surface-lighter hover:bg-surface-light'
      case 1: return 'bg-brand/20 hover:bg-brand/30'
      case 2: return 'bg-brand/40 hover:bg-brand/50'
      case 3: return 'bg-brand/60 hover:bg-brand/70'
      case 4: return 'bg-brand hover:bg-brand/90'
      default: return 'bg-surface-lighter hover:bg-surface-light'
    }
  }

  return (
    <div className="overflow-x-auto">
      <div className="min-w-fit p-4">
        <div className="flex gap-2">
          {/* Month Labels */}
          <div className="w-8" /> {/* Spacer for day labels */}
          <div className="flex-1 flex">
            {weekGroups.map((week, i) => {
              const monthLabel = format(week[0].date, 'MMM')
              const prevMonth = i > 0 ? format(weekGroups[i-1][0].date, 'MMM') : ''
              return monthLabel !== prevMonth && (
                <div
                  key={`month-${i}`}
                  className="text-xs text-gray-400"
                  style={{
                    width: '14px',
                    marginRight: '2px',
                    textAlign: 'center'
                  }}
                >
                  {monthLabel}
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex gap-2 mt-2">
          {/* Day Labels */}
          <div className="w-8 flex flex-col gap-[2px]">
            {['Mon', 'Wed', 'Fri'].map(day => (
              <div key={day} className="h-[14px] text-xs text-gray-400">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="flex gap-[2px]">
            {weekGroups.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-[2px]">
                {week.map((day, dayIndex) => {
                  const level = getActivityLevel(day.count)
                  return (
                    <motion.div
                      key={format(day.date, 'yyyy-MM-dd')}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 30,
                        delay: weekIndex * 0.02 + dayIndex * 0.01
                      }}
                      className={`
                        w-[14px] h-[14px] rounded-sm
                        ${getActivityColor(level)}
                        transition-colors duration-200
                        cursor-pointer
                      `}
                      title={`${format(day.date, 'MMM d, yyyy')}: ${day.count} activities`}
                    />
                  )
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-2 mt-4 text-xs text-gray-400">
          <span>Less</span>
          {[0, 1, 2, 3, 4].map(level => (
            <div
              key={level}
              className={`w-[14px] h-[14px] rounded-sm ${getActivityColor(level)}`}
            />
          ))}
          <span>More</span>
        </div>
      </div>
    </div>
  )
} 
