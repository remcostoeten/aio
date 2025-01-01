import { motion } from 'framer-motion'

interface TimelineConnectorProps {
  side: 'left' | 'right'
}

export function TimelineConnector({ side }: TimelineConnectorProps) {
  return (
    <motion.div
      className={`absolute top-1/2 ${
        side === 'left' ? 'right-[calc(50%+1rem)]' : 'left-[calc(50%+1rem)]'
      } h-px w-[calc(50%-3rem)]`}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ 
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }}
      style={{
        originX: side === 'left' ? 1 : 0,
        background: `linear-gradient(${side === 'left' ? '90deg' : '270deg'}, transparent, rgba(0,167,111,0.3))`,
        boxShadow: '0 0 8px rgba(0,167,111,0.2)'
      }}
    >
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-brand"
        style={{
          [side === 'left' ? 'right' : 'left']: 0
        }}
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.5, 1] }}
        transition={{
          duration: 0.4,
          delay: 0.4,
          ease: 'easeOut'
        }}
      />
    </motion.div>
  )
}