"use client"

import { createContext, useContext } from "react"

interface SelectContextValue {
  value?: string
  onValueChange?: (value: string) => void
  open: boolean
  setOpen: (open: boolean) => void
}

export const SelectContext = createContext<SelectContextValue | null>(null)

export function useSelectContext() {
  const context = useContext(SelectContext)
  if (!context) {
    throw new Error("Select components must be used within a Select provider")
  }
  return context
}