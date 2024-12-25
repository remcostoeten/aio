
import { ReactNode, useState } from "react"
import { PanelGroup } from "./panel-group"
import { Panel } from "./panel"
import { PanelHandle } from "./panel-handle"
import { PanelToggle } from "./panel-toggle"
import { Header } from "./header"
import { SidebarShell, MetadataShell } from "../shells"

interface MainLayoutProps {
  navigationContent: ReactNode
  mainContent: ReactNode
  detailsContent?: ReactNode
  showDetailsSidebar?: boolean
}

export function MainLayout({
  navigationContent,
  mainContent,
  detailsContent,
  showDetailsSidebar = true,
}: MainLayoutProps) {
  const [isNavCollapsed, setIsNavCollapsed] = useState(false)
  const [isDetailsCollapsed, setIsDetailsCollapsed] = useState(false)

  return (
    <div className="h-screen bg-background">
      <Header />
      <div className="h-[calc(100vh-3.5rem)]">
        <PanelGroup>
          <Panel defaultSize={15} minSize={0} maxSize={20} order={1}>
            <div className="relative h-full">
              <SidebarShell>
                {navigationContent}
              </SidebarShell>
              <PanelToggle
                isCollapsed={isNavCollapsed}
                onToggle={() => setIsNavCollapsed(!isNavCollapsed)}
                position="left"
              />
            </div>
          </Panel>
          <PanelHandle />
          <Panel defaultSize={showDetailsSidebar ? 65 : 85} minSize={30} order={2}>
            {mainContent}
          </Panel>
          {showDetailsSidebar && detailsContent && (
            <>
              <PanelHandle />
              <Panel defaultSize={20} minSize={0} maxSize={30} order={3}>
                <div className="relative h-full">
                  <MetadataShell>
                    {detailsContent}
                  </MetadataShell>
                  <PanelToggle
                    isCollapsed={isDetailsCollapsed}
                    onToggle={() => setIsDetailsCollapsed(!isDetailsCollapsed)}
                    position="right"
                  />
                </div>
              </Panel>
            </>
          )}
        </PanelGroup>
      </div>
    </div>
  )
}