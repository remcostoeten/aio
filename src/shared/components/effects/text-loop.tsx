
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

type TextLoopProps = {
  children: React.ReactNode[]
}

export function TextLoop({ children }: TextLoopProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % React.Children.count(children))
    }, 2000)

    return () => clearInterval(timer)
  }, [children])

  return (
    <span className="relative inline-block w-16">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute"
        >
          {children[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
} 
