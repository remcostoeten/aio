import { useState, useEffect } from 'react'
import { cn } from '@/shared/helpers'
import { Outlet } from '@tanstack/react-router'
import { AdminSidebar } from './admin-sidebar'
import { DashboardHeader } from './dashboard-header'
import { ResizablePanel, ResizablePanelGroup } from '@/shared/components/ui/resizable'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useLayoutStore } from '../../stores/layout-store'

type DashboardLayoutProps = {
  sidebar?: React.ReactNode
  rightPanel?: React.ReactNode
  showRightPanel?: boolean
  breadcrumbs?: React.ReactNode
  search?: {
    placeholder?: string
    onSearch: (query: string) => void
  }
}

export function DashboardLayout({ 
  sidebar,
  rightPanel,
  showRightPanel = false,
  breadcrumbs,
  search
}: DashboardLayoutProps) {
  const {
    leftPanelSize,
    rightPanelSize,
    leftCollapsed,
    rightCollapsed,
    setLeftPanelSize,
    setRightPanelSize,
    setLeftCollapsed,
    setRightCollapsed
  } = useLayoutStore()

  // Handle snap behavior
  const handleLeftResize = (size: number) => {
    if (size < 5) {
      setLeftCollapsed(true)
      setLeftPanelSize(0)
    } else {
      setLeftPanelSize(size)
    }
  }

  const handleRightResize = (size: number) => {
    if (size < 5) {
      setRightCollapsed(true)
      setRightPanelSize(0)
    } else {
      setRightPanelSize(size)
    }
  }

  return (
    <div className="h-screen grid grid-cols-[64px_1fr]">
      {/* Fixed Admin Nav */}
      <AdminSidebar />

      {/* Resizable Layout */}
      <ResizablePanelGroup direction="horizontal">
        {/* Left Sidebar */}
        <ResizablePanel 
          defaultSize={leftPanelSize}
          size={leftPanelSize}
          minSize={15}
          maxSize={30}
          collapsible={true}
          collapsedSize={0}
          onResize={handleLeftResize}
          className="transition-all duration-300 ease-in-out"
        >
          <aside className="h-full border-r relative">
            <div className={cn(
              "transition-opacity duration-300",
              leftCollapsed ? "opacity-0" : "opacity-100"
            )}>
              {sidebar}
            </div>
            <button
              onClick={() => {
                setLeftCollapsed(!leftCollapsed)
                setLeftPanelSize(leftCollapsed ? 20 : 0)
              }}
              className={cn(
                "absolute top-1/2 -right-3 z-10",
                "p-1 rounded-full bg-background border shadow-sm",
                "hover:bg-secondary transition-colors",
                "transform transition-transform duration-300",
                leftCollapsed && "rotate-180"
              )}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
          </aside>
        </ResizablePanel>

        {/* Main Content */}
        <ResizablePanel defaultSize={60}>
          <main className="flex flex-col h-screen">
            <DashboardHeader 
              breadcrumbs={breadcrumbs}
              search={search}
            />
            <div className="flex-1 overflow-auto p-6">
              <Outlet />
            </div>
          </main>
        </ResizablePanel>

        {/* Right Panel */}
        {showRightPanel && (
          <ResizablePanel 
            defaultSize={rightPanelSize}
            size={rightPanelSize}
            minSize={15}
            maxSize={30}
            collapsible={true}
            collapsedSize={0}
            onResize={handleRightResize}
            className="transition-all duration-300 ease-in-out"
          >
            <aside className="h-full border-l relative">
              {rightPanel}
              <button
                onClick={() => {
                  setRightCollapsed(!rightCollapsed)
                  setRightPanelSize(rightCollapsed ? 20 : 0)
                }}
                className={cn(
                  "absolute top-1/2 -left-3 z-10",
                  "p-1 rounded-full bg-background border shadow-sm",
                  "hover:bg-secondary transition-colors",
                  "transform transition-transform duration-300",
                  rightCollapsed && "rotate-180"
                )}
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
            </aside>
          </ResizablePanel>
        )}
      </ResizablePanelGroup>
    </div>
  )
} 
