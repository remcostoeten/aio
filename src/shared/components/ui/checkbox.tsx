"use client"

import { forwardRef } from "react"
import { cn } from "@/shared/helpers"
import { Check } from "lucide-react"

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({
  className,
  ...props
}, ref) => {
  return (
    <div className="relative inline-flex items-center">
      <input
        type="checkbox"
        className="peer sr-only"
        ref={ref}
        {...props}
      />
      <div className={cn(
        "h-4 w-4 rounded border border-[#2F2F2F] bg-[#1F1F1F]",
        "peer-focus:border-[#3ECF8E]",
        "peer-checked:bg-[#3ECF8E] peer-checked:border-[#3ECF8E]",
        "transition-all duration-200",
        className
      )}>
        <Check className="h-3 w-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
      </div>
    </div>
  )
})