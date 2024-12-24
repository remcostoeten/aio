"use client";

import { ChevronRight, Home, Code } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const BREADCRUMB_LABELS: Record<string, { label: string; icon: React.ComponentType }> = {
  "code-snippets": { label: "Code Snippets", icon: Code },
};

export function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
      <Link href="/" className="hover:text-foreground">
        <Home className="w-4 h-4" />
      </Link>
      {segments.map((segment, index) => {
        const config = BREADCRUMB_LABELS[segment];
        const Icon = config?.icon;
        
        return (
          <div key={segment} className="flex items-center space-x-2">
            <ChevronRight className="w-4 h-4" />
            <Link
              href={`/${segments.slice(0, index + 1).join("/")}`}
              className="flex items-center space-x-1 hover:text-foreground"
            >
              {Icon && <Icon className="w-4 h-4" />}
              <span>{config?.label || segment}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
}