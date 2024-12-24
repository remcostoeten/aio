"use client"

import { Button } from "@/shared/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PanelToggleProps {
  isCollapsed: boolean
  onToggle: () => void
  position?: "left" | "right"
}

export function PanelToggle({ 
  isCollapsed, 
  onToggle,
  position = "left" 
}: PanelToggleProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className={`absolute ${position === "left" ? "-right-10" : "-left-10"} top-2 z-10`}
      onClick={onToggle}
    >
      {position === "left" ? (
        isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />
      ) : (
        isCollapsed ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />
      )}
    </Button>
  )
}