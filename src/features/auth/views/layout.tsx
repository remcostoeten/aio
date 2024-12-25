/**
 * @author Remco Stoeten
 * @description Auth layout component with logo and animated quotes
 */

import type { ReactNode } from 'react'
import { Logo } from '@/shared/theme/logo'
import { TextLoop } from '@/shared/components/effects'

type AuthLayoutProps = {
  children: ReactNode
  title: string
  subtitle: ReactNode
}

export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Logo />
        </div>
        <div className="relative z-20 mt-auto">
          <TextLoop />
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
            {subtitle}
          </div>
          {children}
        </div>
      </div>
    </div>
  )
} 
