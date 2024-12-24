"use client"

import { ReactNode } from "react"
import { BaseShell } from "./base-shell"

interface SidebarShellProps {
  children: ReactNode
}

export function SidebarShell({ children }: SidebarShellProps) {
  return (
    <BaseShell className="border-r">
      {children}
    </BaseShell>
  )
}