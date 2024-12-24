import React, { useState, useRef, ReactNode, useEffect } from 'react';
import { motion as framerMotion, AnimatePresence } from 'framer-motion';

type Theme = 'light' | 'dark' | 'catppuccin' | 'monokai' | 'vercel';
type Placement = 'top' | 'right' | 'bottom' | 'left';

interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
  className?: string;
  theme?: Theme;
  placement?: Placement;
  animate?: boolean;
  showDelay?: number;
  hideDelay?: number;
  dashedBorderBottom?: boolean;
}

interface PlacementConfig {
  initial: { x?: number; y?: number; opacity: number; scale: number };
  animate: { x?: number; y?: number; opacity: number; scale: number };
  exit: { x?: number; y?: number; opacity: number; scale: number };
  caretClass: string;
}

const themes: Record<Theme, string> = {
  light: 'bg-white border border-gray-200 text-gray-800',
  dark: 'bg-[#1a1a1a] border border-[#333] text-gray-200',
  vercel: 'bg-black border border-[#333] text-white',
  catppuccin: 'bg-[#1e1e2e] border border-[#6c7086] text-[#cdd6f4]',
  monokai: 'bg-[#272822] border border-[#49483e] text-[#f8f8f2]'
};

const caretThemes: Record<Theme, string> = {
  light: 'border-white',
  dark: 'border-[#1a1a1a]',
  vercel: 'border-black',
  catppuccin: 'border-[#1e1e2e]',
  monokai: 'border-[#272822]'
};

const placements: Record<Placement, PlacementConfig> = {
  top: {
    initial: { y: -10, opacity: 0, scale: 0.8 },
    animate: { y: 0, opacity: 1, scale: 1 },
    exit: { y: -10, opacity: 0, scale: 0.8 },
    caretClass: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2'
  },
  right: {
    initial: { x: 10, opacity: 0, scale: 0.8 },
    animate: { x: 0, opacity: 1, scale: 1 },
    exit: { x: 10, opacity: 0, scale: 0.8 },
    caretClass: 'left-0 top-1/2 -translate-y-1/2 -translate-x-1/2'
  },
  bottom: {
    initial: { y: 10, opacity: 0, scale: 0.8 },
    animate: { y: 0, opacity: 1, scale: 1 },
    exit: { y: 10, opacity: 0, scale: 0.8 },
    caretClass: 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2'
  },
  left: {
    initial: { x: -10, opacity: 0, scale: 0.8 },
    animate: { x: 0, opacity: 1, scale: 1 },
    exit: { x: -10, opacity: 0, scale: 0.8 },
    caretClass: 'right-0 top-1/2 -translate-y-1/2 translate-x-1/2'
  }
};

const themeSpecificStyles: Record<Theme, { shadow: string; hover?: string }> = {
  light: {
    shadow: 'shadow-lg shadow-gray-200/50',
    hover: 'hover:shadow-xl hover:shadow-gray-200/60'
  },
  dark: {
    shadow: 'shadow-lg shadow-black/20',
    hover: 'hover:shadow-xl hover:shadow-black/30'
  },
  vercel: {
    shadow: 'shadow-lg shadow-black/30',
    hover: 'hover:shadow-xl hover:shadow-black/40'
  },
  catppuccin: {
    shadow: 'shadow-lg shadow-[#6c7086]/20',
    hover: 'hover:shadow-xl hover:shadow-[#6c7086]/30'
  },
  monokai: {
    shadow: 'shadow-lg shadow-[#49483e]/20',
    hover: 'hover:shadow-xl hover:shadow-[#49483e]/30'
  }
};

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  className = '',
  theme = 'dark',
  placement = 'top',
  animate = true,
  showDelay = 100,
  hideDelay = 0,
  dashedBorderBottom = false
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const triggerRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const showTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showTooltip = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    showTimeoutRef.current = setTimeout(() => setIsVisible(true), showDelay);
  };

  const hideTooltip = () => {
    if (showTimeoutRef.current) {
      clearTimeout(showTimeoutRef.current);
    }
    hideTimeoutRef.current = setTimeout(() => setIsVisible(false), hideDelay);
  };

  useEffect(() => {
    return () => {
      if (showTimeoutRef.current) clearTimeout(showTimeoutRef.current);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, []);

  const getTooltipPosition = () => {
    if (!triggerRef.current) return {};

    switch (placement) {
      case 'top':
        return {
          bottom: 'calc(100% + 8px)',
          left: '50%',
          transform: 'translateX(-50%)'
        };
      case 'bottom':
        return {
          top: 'calc(100% + 8px)',
          left: '50%',
          transform: 'translateX(-50%)'
        };
      case 'left':
        return {
          right: 'calc(100% + 8px)',
          top: '50%',
          transform: 'translateY(-50%)'
        };
      case 'right':
        return {
          left: 'calc(100% + 8px)',
          top: '50%',
          transform: 'translateY(-50%)'
        };
    }
  };

  return (
    <framerMotion.span
      ref={triggerRef}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
      className="inline-block relative"
    >
      {children}
      {dashedBorderBottom && (
        <framerMotion.span
          className="absolute bottom-0 left-0 w-full border-b border-dashed border-current opacity-60"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
      <AnimatePresence>
        {isVisible && (
          <framerMotion.div
            ref={tooltipRef}
            className={`
              absolute z-50 px-4 py-2 rounded-md 
              ${themes[theme]} 
              ${themeSpecificStyles[theme].shadow}
              ${themeSpecificStyles[theme].hover}
              transition-shadow duration-200
              backdrop-blur-sm backdrop-saturate-150
              ${className}
            `}
            style={getTooltipPosition()}
            initial={animate ? placements[placement].initial : undefined}
            animate={animate ? placements[placement].animate : undefined}
            exit={animate ? placements[placement].exit : undefined}
            transition={{
              type: 'spring',
              damping: 20,
              stiffness: 300
            }}
          >
            {content}
            <div
              className={`
                absolute w-2 h-2 border rotate-45 
                ${placements[placement].caretClass}
                ${caretThemes[theme]}
              `}
            />
          </framerMotion.div>
        )}
      </AnimatePresence>
    </framerMotion.span>
  );
};

export default Tooltip;