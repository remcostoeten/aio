"use client"

import { useState } from "react"
import { SelectContext } from "./context"

export { SelectTrigger } from "./select-trigger"
export { SelectContent } from "./select-content"
export { SelectItem } from "./select-item"
export { SelectValue } from "./select-value"

interface SelectProps {
  value?: string
  onValueChange?: (value: string) => void
  children: React.ReactNode
}

export function Select({ value, onValueChange, children }: SelectProps) {
  const [open, setOpen] = useState(false)

  return (
    <SelectContext.Provider value={{ value, onValueChange, open, setOpen }}>
      {children}
    </SelectContext.Provider>
  )
}