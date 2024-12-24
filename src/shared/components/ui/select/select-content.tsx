"use client"

import { forwardRef } from "react"
import { createPortal } from "react-dom"
import { cn } from "@/shared/helpers"
import { useSelectContext } from "./context"

export const SelectContent = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { open, setOpen } = useSelectContext()

  if (!open) return null

  return createPortal(
    <>
      <div 
        className="fixed inset-0 z-50"
        onClick={() => setOpen(false)}
      />
      <div
        ref={ref}
        className={cn(
          "absolute z-50 min-w-[8rem] overflow-hidden rounded-md border",
          "bg-popover text-popover-foreground shadow-md",
          "animate-in fade-in-80",
          className
        )}
        {...props}
      >
        <div className="p-1">{children}</div>
      </div>
    </>,
    document.body
  )
})

SelectContent.displayName = "SelectContent"