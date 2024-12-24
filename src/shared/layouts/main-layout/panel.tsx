"use client"

import { ReactNode } from "react"
import { ResizablePanel } from "@/shared/components/ui/resizable"

interface PanelProps {
  children: ReactNode
  defaultSize: number
  minSize?: number
  maxSize?: number
  order?: number
}

export function Panel({ 
  children, 
  defaultSize, 
  minSize = 0, 
  maxSize = 100,
  order,
}: PanelProps) {
  return (
    <ResizablePanel
      defaultSize={defaultSize}
      minSize={minSize}
      maxSize={maxSize}
      order={order}
    >
      {children}
    </ResizablePanel>
  )
}