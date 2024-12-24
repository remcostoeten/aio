"use client"

import { LucideIcon } from "lucide-react"
import { Button } from "./ui/button"
import { cn } from "@/shared/helpers"

interface EmptyStateProps {
  icon: LucideIcon
  title: string
  description: string
  action?: {
    label: string
    onClick: () => void
  }
  className?: string
}

export function EmptyState({ icon: Icon, title, description, action, className }: EmptyStateProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center h-full text-center p-8 space-y-4", className)}>
      <div className="p-4 rounded-full bg-muted/10 ring-1 ring-muted/20">
        <Icon className="w-8 h-8 text-muted-foreground" />
      </div>
      <div className="space-y-2 max-w-[280px]">
        <h3 className="text-lg font-medium tracking-tight">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
      {action && (
        <Button onClick={action.onClick} className="mt-2">
          {action.label}
        </Button>
      )}
    </div>
  )
}