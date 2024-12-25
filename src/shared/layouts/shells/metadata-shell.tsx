
import { ReactNode } from "react"
import { BaseShell } from "./base-shell"

interface MetadataShellProps {
  children: ReactNode
}

export function MetadataShell({ children }: MetadataShellProps) {
  return (
    <BaseShell className="border-l">
      {children}
    </BaseShell>
  )
}