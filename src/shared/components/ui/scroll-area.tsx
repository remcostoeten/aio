import { cn } from "@/shared/helpers"
import { forwardRef } from "react"

type ScrollAreaProps = {
  orientation?: "vertical" | "horizontal"
} & React.HTMLAttributes<HTMLDivElement>

export const ScrollArea = forwardRef<HTMLDivElement, ScrollAreaProps>(({
  className,
  children,
  orientation = "vertical",
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "relative overflow-auto",
        orientation === "vertical" ? "h-full" : "w-full",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
})

ScrollArea.displayName = "ScrollArea"
