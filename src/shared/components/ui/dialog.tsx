"use client"

import { cn } from "@/shared/helpers"
import { createContext, useContext, useState } from "react"
import { createPortal } from "react-dom"
import { X } from "lucide-react"

interface DialogContextType {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const DialogContext = createContext<DialogContextType | null>(null)

export function Dialog({
  children,
  open,
  onOpenChange,
}: {
  children: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}) {
  const [internalOpen, setInternalOpen] = useState(false)
  
  const isControlled = open !== undefined
  const isOpen = isControlled ? open : internalOpen
  const handleOpenChange = isControlled ? onOpenChange : setInternalOpen

  return (
    <DialogContext.Provider value={{ open: isOpen, onOpenChange: handleOpenChange }}>
      {children}
    </DialogContext.Provider>
  )
}

export function DialogTrigger({ children, asChild }: { children: React.ReactNode, asChild?: boolean }) {
  const context = useContext(DialogContext)
  if (!context) throw new Error("DialogTrigger must be used within Dialog")

  if (asChild) {
    return (
      <div onClick={() => context.onOpenChange(true)}>
        {children}
      </div>
    )
  }

  return (
    <button type="button" onClick={() => context.onOpenChange(true)}>
      {children}
    </button>
  )
}

export function DialogContent({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const context = useContext(DialogContext)
  if (!context) throw new Error("DialogContent must be used within Dialog")
  if (!context.open) return null

  return createPortal(
    <>
      <div 
        className="fixed inset-0 bg-black/50 z-50"
        onClick={() => context.onOpenChange(false)}
      />
      <div className={cn(
        "fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%]",
        "w-full max-w-lg rounded-lg bg-background p-6 shadow-lg",
        "grid gap-4",
        className
      )}>
        <button
          type="button"
          onClick={() => context.onOpenChange(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
        {children}
      </div>
    </>,
    document.body
  )
}

export function DialogHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)}
      {...props}
    />
  )
}

export function DialogTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn("text-lg font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  )
}

export function DialogDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

export function DialogFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
      {...props}
    />
  )
}