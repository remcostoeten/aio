"use client"

import { forwardRef } from "react"
import { cn } from "@/shared/helpers"
import { useSelectContext } from "./context"

export const SelectValue = forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const { value } = useSelectContext()
  
  return (
    <span
      ref={ref}
      className={cn("block truncate", className)}
      {...props}
    >
      {value}
    </span>
  )
})

SelectValue.displayName = "SelectValue"