import React from 'react';
import { Variants, motion } from 'framer-motion';

export type LogoSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type AnimationVariant =
  | 'light'
  | 'dark'
  | 'stroke'
  | 'glassmorphic'
  | 'neon'
  | 'rainbow'
  | 'crystal'
  | 'trace'
  | 'fade'
  | 'segment'
  | 'stagger'
  | 'retro'
  | 'morph'
  | '3d'
  | 'glitch'
  | 'liquid'
  | 'magnetic'
  | 'stagger-triangles'
  | 'rotate-segments'
  | 'wave'
  | 'pulse'
  | 'hover-lift'
  | 'hover-glow'
  | 'hover-rotate'
  | 'tooltip-fade'
  | 'tooltip-scale'
  | 'tooltip-slide'
  | 'none';

export interface ShieldLogoProps {
  className?: string;
  size?: LogoSize;
  width?: number;
  height?: number;
  fill?: string;
  fillOutline?: string;
  fillTop?: string;
  fillLeft?: string;
  fillRight?: string;
  bgFill?: string;
  animated?: boolean;
  animationVariant?: AnimationVariant;
  hasLink?: boolean;
  linkTo?: string;
  tooltipContent?: string;
  hasTooltip?: boolean;
  onAnimationComplete?: () => void;
}

export const sizeMap: Record<LogoSize, { width: number; height: number }> = {
  xs: { width: 32, height: 32 },
  sm: { width: 48, height: 48 },
  md: { width: 64, height: 64 },
  lg: { width: 96, height: 96 },
  xl: { width: 128, height: 128 }
} as const;

// Animation Variants Hook
function useAnimationVariant(variant: AnimationVariant = 'trace') {
  // Define base variants that can be reused
  const baseContainerVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  const basePathVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const baseSegmentVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Define all variants
  const allVariants: Record<
    AnimationVariant,
    {
      containerVariants: Variants;
      pathVariants: Variants;
      segmentVariants: Variants;
      className?: string;
    }
  > = {
    light: {
      containerVariants: baseContainerVariants,
      pathVariants: basePathVariants,
      segmentVariants: baseSegmentVariants,
      className: 'drop-shadow-sm'
    },
    dark: {
      containerVariants: baseContainerVariants,
      pathVariants: basePathVariants,
      segmentVariants: baseSegmentVariants,
      className: 'drop-shadow-md'
    },
    stroke: {
      containerVariants: baseContainerVariants,
      pathVariants: {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
          pathLength: 1,
          opacity: 1,
          transition: { duration: 1, ease: 'easeInOut' }
        }
      },
      segmentVariants: baseSegmentVariants
    },
    trace: {
      containerVariants: baseContainerVariants,
      pathVariants: {
        hidden: { pathLength: 0, opacity: 1 },
        visible: {
          pathLength: 1,
          opacity: 1,
          transition: { duration: 1.5, ease: 'easeInOut' }
        }
      },
      segmentVariants: {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: 0.5, delay: 1 }
        }
      }
    },
    fade: {
      containerVariants: baseContainerVariants,
      pathVariants: {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: 1, ease: 'easeInOut' }
        }
      },
      segmentVariants: {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: 1, delay: 0.5, ease: 'easeInOut' }
        }
      }
    },
    segment: {
      containerVariants: baseContainerVariants,
      pathVariants: basePathVariants,
      segmentVariants: {
        hidden: { scale: 0, opacity: 0 },
        visible: {
          scale: 1,
          opacity: 1,
          transition: { duration: 0.5, ease: 'easeOut' }
        }
      }
    },
    stagger: {
      containerVariants: baseContainerVariants,
      pathVariants: basePathVariants,
      segmentVariants: {
        hidden: { y: 20, opacity: 0 },
        visible: (i: number) => ({
          y: 0,
          opacity: 1,
          transition: {
            delay: i * 0.1,
            duration: 0.5,
            ease: 'easeOut'
          }
        })
      }
    },
    none: {
      containerVariants: {},
      pathVariants: {},
      segmentVariants: {}
    },
    // Add empty variants for other animation types
    glassmorphic: { containerVariants: {}, pathVariants: {}, segmentVariants: {} },
    neon: { containerVariants: {}, pathVariants: {}, segmentVariants: {} },
    rainbow: { containerVariants: {}, pathVariants: {}, segmentVariants: {} },
    crystal: { containerVariants: {}, pathVariants: {}, segmentVariants: {} },
    retro: { containerVariants: {}, pathVariants: {}, segmentVariants: {} },
    morph: { containerVariants: {}, pathVariants: {}, segmentVariants: {} },
    '3d': { containerVariants: {}, pathVariants: {}, segmentVariants: {} },
    glitch: { containerVariants: {}, pathVariants: {}, segmentVariants: {} },
    liquid: { containerVariants: {}, pathVariants: {}, segmentVariants: {} },
    magnetic: { containerVariants: {}, pathVariants: {}, segmentVariants: {} },
    'stagger-triangles': { containerVariants: {}, pathVariants: {}, segmentVariants: {} },
    'rotate-segments': { containerVariants: {}, pathVariants: {}, segmentVariants: {} },
    wave: { containerVariants: {}, pathVariants: {}, segmentVariants: {} },
    pulse: { containerVariants: {}, pathVariants: {}, segmentVariants: {} },
    'hover-lift': { containerVariants: {}, pathVariants: {}, segmentVariants: {} },
    'hover-glow': { containerVariants: {}, pathVariants: {}, segmentVariants: {} },
    'hover-rotate': { containerVariants: {}, pathVariants: {}, segmentVariants: {} },
    'tooltip-fade': { containerVariants: {}, pathVariants: {}, segmentVariants: {} },
    'tooltip-scale': { containerVariants: {}, pathVariants: {}, segmentVariants: {} },
    'tooltip-slide': { containerVariants: {}, pathVariants: {}, segmentVariants: {} }
  };

  return allVariants[variant] || allVariants.none;
}

// Simple Mounted Theme Hook
function useMountedTheme() {
  const [mounted, setMounted] = React.useState(false);
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');

  React.useEffect(() => {
    setMounted(true);
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDarkMode ? 'dark' : 'light');
  }, []);

  return { theme, mounted };
}

export const Logo: React.FC<ShieldLogoProps> = ({
  className,
  size = 'md',
  width,
  height,
  fill,
  fillOutline,
  fillTop,
  fillLeft,
  fillRight,
  bgFill = 'transparent',
  animated = true,
  animationVariant = 'glassmorphic',
  hasLink = false,
  linkTo = '/',
  tooltipContent = 'Home',
  onAnimationComplete
}) => {
  const { theme, mounted } = useMountedTheme();
  const variants = useAnimationVariant(animated ? animationVariant : 'none');

  if (!mounted) {
    return null;
  }

  const { width: defaultWidth, height: defaultHeight } = sizeMap[size];
  const finalWidth = width || defaultWidth;
  const finalHeight = height || defaultHeight;

  const defaultFill = theme === 'dark' ? '#ffffff' : '#000000';
  const defaultOutline = theme === 'dark' ? '#ffffff' : '#000000';
  const defaultSegmentFill = theme === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)';

  const LogoSVG = (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2022 2105"
      width={finalWidth}
      height={finalHeight}
      className={`transition-colors duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${variants.className} ${className}`}
      initial={animated ? 'hidden' : undefined}
      animate={animated ? 'visible' : undefined}
      variants={variants.containerVariants}
      role="img"
      aria-label="Shield Logo"
      onAnimationComplete={onAnimationComplete}
    >
      <title>Shield Logo</title>
      <desc>A shield-shaped logo representing our brand identity</desc>

      <rect width="100%" height="100%" fill={bgFill} aria-hidden="true" />

      {/* Outline */}
      <motion.path
        d="m1011 2041.4c-547.8-316.2-886.9-897.7-893.9-1528.2v-39.7l893.9-406.5 893.9 406.5v39.7c-7 630.5-346.1 1212-893.9 1528.2zm0-195.4c428.3-282.8 698.1-752.8 725.4-1266.4l-725.4-329.9-725.4 329.9c27.3 513.6 297.1 983.6 725.4 1266.4z"
        fill={fill || defaultFill}
        stroke={fillOutline || defaultOutline}
        strokeWidth="4"
        variants={variants.pathVariants}
        className="transition-colors duration-300"
      />

      {/* Top segment */}
      <motion.path
        d="m373.9 592.4l637.1 289.7 637.1-289.7-637.1-289.7z"
        fill={fillTop || defaultSegmentFill}
        variants={variants.segmentVariants}
        className="transition-colors duration-300"
      />

      {/* Left segment */}
      <motion.path
        d="m986.1 925.4l-648.5-294.9c39.8 456.1 277 872.6 648.5 1139.7z"
        fill={fillLeft || defaultSegmentFill}
        variants={variants.segmentVariants}
        className="transition-colors duration-300"
      />

      {/* Right segment */}
      <motion.path
        d="m1035.9 925.4v844.8c371.5-267.1 608.7-683.6 648.5-1139.7z"
        fill={fillRight || defaultSegmentFill}
        variants={variants.segmentVariants}
        className="transition-colors duration-300"
      />
    </motion.svg>
  );

  // Return with optional link wrapper
  return hasLink ? (
    <a
      href={linkTo}
      className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      title={tooltipContent}
    >
      {LogoSVG}
    </a>
  ) : (
    <div className="inline-block">{LogoSVG}</div>
  );
};

export default Logo;