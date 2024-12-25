
import { ReactNode } from "react";
import { ScrollArea } from 'ui';

interface NavigationSidebarProps {
  children: ReactNode;
}

export function NavigationSidebar({ children }: NavigationSidebarProps) {
  return (
    <div className="h-screen border-r bg-card">
      <ScrollArea className="h-full">
        <div className="p-4 space-y-4">{children}</div>
      </ScrollArea>
    </div>
  );
}