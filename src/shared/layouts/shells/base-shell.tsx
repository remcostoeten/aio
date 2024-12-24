"use client"

import { ReactNode } from "react"
import { ScrollArea } from "@/shared/components/ui/scroll-area"

interface BaseShellProps {
  children: ReactNode
  className?: string
}

export function BaseShell({ children, className = "" }: BaseShellProps) {
  return (
    <div className={`h-full bg-card ${className}`}>
      <ScrollArea className="h-full">
        <div className="p-4 space-y-4">
          {children}
        </div>
      </ScrollArea>
    </div>
  )
}