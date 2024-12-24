"use client"

import { ResizableHandle } from "@/shared/components/ui/resizable"

interface PanelHandleProps {
  withHandle?: boolean
}

export function PanelHandle({ withHandle = true }: PanelHandleProps) {
  return <ResizableHandle withHandle={withHandle} />
}