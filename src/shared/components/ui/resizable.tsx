
import * as ResizablePrimitive from "react-resizable-panels"
import { cn } from "@/shared/helpers"

const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      className
    )}
    {...props}
  />
)

const ResizablePanel = ({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.Panel>) => (
  <ResizablePrimitive.Panel
    className={cn(
      "relative flex w-full data-[panel-group-direction=vertical]:h-full",
      "transition-all duration-300 ease-in-out",
      className
    )}
    {...props}
  />
)

const ResizableHandle = ({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle>) => (
  <ResizablePrimitive.PanelResizeHandle
    className={cn(
      "relative flex w-px items-center justify-center bg-border",
      "after:absolute after:inset-y-0 after:left-1/2 after:w-4 after:-translate-x-1/2",
      "transition-opacity duration-300",
      "opacity-0 hover:opacity-100",
      className
    )}
    {...props}
  />
)

export {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
}
