"use client"

import { cn } from "@/shared/helpers"
import { createContext, useContext, useState, forwardRef, useCallback } from "react"
import { ChevronDown } from "lucide-react"
import { createPortal } from "react-dom"

interface SelectContextValue {
  value?: string
  onValueChange?: (value: string) => void
  open: boolean
  setOpen: (open: boolean) => void
}

const SelectContext = createContext<SelectContextValue | null>(null)

function useSelectContext() {
  const context = useContext(SelectContext)
  if (!context) {
    throw new Error("Select components must be used within a Select provider")
  }
  return context
}

export function Select({
  value,
  onValueChange,
  children
}: {
  value?: string
  onValueChange?: (value: string) => void
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(false)

  return (
    <SelectContext.Provider value={{ value, onValueChange, open, setOpen }}>
      {children}
    </SelectContext.Provider>
  )
}

export const SelectTrigger = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  const { open, setOpen } = useSelectContext()
  
  const handleClick = useCallback(() => {
    setOpen(!open)
  }, [open, setOpen])

  return (
    <button
      ref={ref}
      type="button"
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-input",
        "bg-background px-3 py-2 text-sm ring-offset-background",
        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
      <ChevronDown className={cn(
        "h-4 w-4 opacity-50 transition-transform duration-200",
        open && "transform rotate-180"
      )} />
    </button>
  )
})

SelectTrigger.displayName = "SelectTrigger"

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

export const SelectItem = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value: string }
>(({ className, children, value, ...props }, ref) => {
  const { onValueChange, setOpen } = useSelectContext()
  
  const handleSelect = useCallback(() => {
    onValueChange?.(value)
    setOpen(false)
  }, [onValueChange, setOpen, value])

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm",
        "py-1.5 px-2 text-sm outline-none",
        "hover:bg-accent hover:text-accent-foreground",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      onClick={handleSelect}
      {...props}
    >
      {children}
    </div>
  )
})

SelectItem.displayName = "SelectItem"

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