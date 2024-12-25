
import { ReactNode } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface DetailsSidebarProps {
  children: ReactNode;
}

export function DetailsSidebar({ children }: DetailsSidebarProps) {
  return (
    <div className="h-screen border-l bg-card">
      <ScrollArea className="h-full">
        <div className="p-4 space-y-4">{children}</div>
      </ScrollArea>
    </div>
  );
}