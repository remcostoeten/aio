export const bezierEasing = [0.65, 0, 0.35, 1]

export const fadeInVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: bezierEasing
    }
  }
}

export const quoteVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
        ease: bezierEasing
      }
    }
  },
  quoteMark: {
    hidden: { opacity: 0, y: -15, rotate: -10 },
    visible: {
      opacity: 0.3,
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: bezierEasing
      }
    }
  },
  text: {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: bezierEasing
      }
    }
  },
  author: {
    hidden: { opacity: 0, x: -15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: bezierEasing
      }
    }
  }
}