
/**
 * @author Remco Stoeten
 * @description A React component that creates an animated text loop, cycling through child elements
 * with configurable timing and transition effects. Includes accessibility features like ARIA labels,
 * live regions, and pause on hover/focus.
 */

import React, { useState, useEffect, Children, ElementType } from 'react'
import { motion, AnimatePresence, Transition, Variants } from 'framer-motion'
import { cn } from '@/shared/helpers'

interface TextLoopProps<T extends ElementType = 'div'> {
  /** Array of React nodes to cycle through */
  children: React.ReactNode[]
  /** Optional className for styling */
  className?: string
  /** Interval in seconds between transitions */
  interval?: number
  /** Custom transition configuration */
  transition?: Transition
  /** Custom animation variants */
  variants?: Variants
  /** Callback fired when the active index changes */
  onIndexChange?: (index: number) => void
  /** HTML element type to render (default: 'div') */
  as?: T
  /** Aria label for the component */
  ariaLabel?: string
  /** Whether to pause animation on hover/focus (default: true) */
  pauseOnHover?: boolean
  /** Whether the animation should auto-play (default: true) */
  autoPlay?: boolean
}

export default function TextLoop<T extends ElementType = 'div'>({
  children,
  className,
  interval = 2,
  transition = { duration: 0.3 },
  variants,
  onIndexChange,
  as: Component = 'div' as T,
  ariaLabel = 'Rotating text content',
  pauseOnHover = true,
  autoPlay = true,
}: TextLoopProps<T>) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(!autoPlay)
  const items = Children.toArray(children)
  const totalItems = items.length

  useEffect(() => {
    if (isPaused) return

    const intervalMs = interval * 1000
    const timer = setInterval(() => {
      setCurrentIndex((current) => {
        const next = (current + 1) % items.length
        onIndexChange?.(next)
        return next
      })
    }, intervalMs)

    return () => clearInterval(timer)
  }, [items.length, interval, onIndexChange, isPaused])

  const motionVariants: Variants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault()
        setCurrentIndex((current) => (current + 1) % totalItems)
        break
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault()
        setCurrentIndex(
          (current) => (current - 1 + totalItems) % totalItems
        )
        break
      case 'Space':
      case 'Enter':
        e.preventDefault()
        setIsPaused((prev) => !prev)
        break
    }
  }

  return (
    <Component
      className={cn('relative inline-block whitespace-nowrap', className)}
      role="region"
      aria-label={ariaLabel}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      onFocus={() => pauseOnHover && setIsPaused(true)}
      onBlur={() => pauseOnHover && setIsPaused(false)}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="sr-only">
        {`${currentIndex + 1
          } of ${totalItems} items. Use arrow keys to navigate or space to pause.`}
      </div>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={currentIndex}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={transition}
          variants={variants || motionVariants}
          aria-live="polite"
          aria-atomic="true"
        >
          {items[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </Component>
  )
}
