'use client'

import { Outlet } from '@tanstack/react-router'

type Props = {}

export default function AuthLayout({}: Props) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <Outlet />
      </div>
    </div>
  )
} 
