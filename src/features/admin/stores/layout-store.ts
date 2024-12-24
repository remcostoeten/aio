import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type LayoutState = {
  leftPanelSize: number
  rightPanelSize: number
  leftCollapsed: boolean
  rightCollapsed: boolean
  setLeftPanelSize: (size: number) => void
  setRightPanelSize: (size: number) => void
  setLeftCollapsed: (collapsed: boolean) => void
  setRightCollapsed: (collapsed: boolean) => void
}

export const useLayoutStore = create<LayoutState>()(
  persist(
    (set) => ({
      leftPanelSize: 20,
      rightPanelSize: 20,
      leftCollapsed: false,
      rightCollapsed: false,
      setLeftPanelSize: (size) => set({ leftPanelSize: size }),
      setRightPanelSize: (size) => set({ rightPanelSize: size }),
      setLeftCollapsed: (collapsed) => set({ leftCollapsed: collapsed }),
      setRightCollapsed: (collapsed) => set({ rightCollapsed: collapsed })
    }),
    {
      name: 'admin-layout'
    }
  )
) 
