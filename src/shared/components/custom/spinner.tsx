/**
 * @author Remco Stoeten
 * 
 * A customizable Spinner component for React applications.
 * This component provides various options for size, color, speed, and animation curves.
 */

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

type SpinnerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type BezierCurve = 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'custom1' | 'custom2' | 'custom3';

const spinnerVariants = cva(
  'inline-block rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] animate-spin',
  {
    variants: {
      size: {
        xs: 'h-4 w-4',
        sm: 'h-6 w-6',
        md: 'h-8 w-8',
        lg: 'h-12 w-12',
        xl: 'h-16 w-16',
      },
      bezierCurve: {
        linear: 'animate-[spin_1.5s_linear_infinite]',
        ease: 'animate-[spin_1.5s_ease_infinite]',
        'ease-in': 'animate-[spin_1.5s_ease-in_infinite]',
        'ease-out': 'animate-[spin_1.5s_ease-out_infinite]',
        'ease-in-out': 'animate-[spin_1.5s_ease-in-out_infinite]',
        custom1: 'animate-[spin_1.5s_cubic-bezier(0.25,0.1,0.25,1)_infinite]',
        custom2: 'animate-[spin_1.5s_cubic-bezier(0.42,0,0.58,1)_infinite]',
        custom3: 'animate-[spin_1.5s_cubic-bezier(0.68,-0.55,0.27,1.55)_infinite]',
      },
    },
    defaultVariants: {
      size: 'md',
      bezierCurve: 'linear',
    },
  }
);

interface SpinnerProps extends VariantProps<typeof spinnerVariants> {
  className?: string;
  color?: string;
  speed?: number;
  center?: boolean;
}

export const Spinner: React.FC<SpinnerProps> = ({
  className,
  size,
  color,
  speed = 1.5,
  center,
  bezierCurve,
  ...props
}) => {
  const spinnerClasses = cn(
    spinnerVariants({ size, bezierCurve }),
    {
      'fixed inset-0 m-auto': center,
    },
    className
  );

  const style: React.CSSProperties = {
    borderColor: color,
    borderRightColor: 'transparent',
    animationDuration: `${speed}s`,
  };

  return <div className={spinnerClasses} style={style} role="status" aria-label="loading" {...props} />;
};

