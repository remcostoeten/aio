"use client"

import { motion } from 'framer-motion'

type TimelineConnectorProps = {
  side: 'left' | 'right'
}

export default function TimelineConnector({ side }: TimelineConnectorProps) {
  return (
    <motion.div
      className={`absolute top-1/2 ${
        side === 'left' ? 'right-full' : 'left-full'
      } w-8 h-px bg-brand/30`}
      initial={{ width: 0 }}
      animate={{ width: '2rem' }}
      transition={{ duration: 0.3, delay: 0.2 }}
    />
  )
} 
