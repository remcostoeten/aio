
import { forwardRef, useCallback } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/shared/helpers"
import { useSelectContext } from "./context"

export const SelectTrigger = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  const { open, setOpen } = useSelectContext()
  
  const handleClick = useCallback(() => {
    setOpen(!open)
  }, [open, setOpen])

  return (
    <button
      ref={ref}
      type="button"
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-input",
        "bg-background px-3 py-2 text-sm ring-offset-background",
        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
      <ChevronDown className={cn(
        "h-4 w-4 opacity-50 transition-transform duration-200",
        open && "transform rotate-180"
      )} />
    </button>
  )
})

SelectTrigger.displayName = "SelectTrigger"