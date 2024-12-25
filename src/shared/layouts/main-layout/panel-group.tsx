
import { ReactNode } from "react"
import { ResizablePanelGroup } from "@/shared/components/ui/resizable"

interface PanelGroupProps {
  children: ReactNode
  direction?: "horizontal" | "vertical"
}

export function PanelGroup({ children, direction = "horizontal" }: PanelGroupProps) {
  return (
    <ResizablePanelGroup direction={direction}>
      {children}
    </ResizablePanelGroup>
  )
}