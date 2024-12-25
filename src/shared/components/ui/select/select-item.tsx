
import { forwardRef, useCallback } from "react"
import { cn } from "@/shared/helpers"
import { useSelectContext } from "./context"

interface SelectItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

export const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(
  ({ className, children, value, ...props }, ref) => {
    const { onValueChange, setOpen } = useSelectContext()
    
    const handleSelect = useCallback(() => {
      onValueChange?.(value)
      setOpen(false)
    }, [onValueChange, setOpen, value])

    return (
      <div
        ref={ref}
        role="option"
        aria-selected={false}
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
  }
)

SelectItem.displayName = "SelectItem"