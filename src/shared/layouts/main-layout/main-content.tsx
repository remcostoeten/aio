"use client";

import { ReactNode } from "react";
import { Breadcrumbs } from "./breadcrumbs";
import { SiteSearch } from "./site-search";

interface MainContentProps {
  children: ReactNode;
}

export function MainContent({ children }: MainContentProps) {
  return (
    <div className="h-full flex flex-col">
      <div className="border-b px-4 py-3 flex items-center justify-between bg-card">
        <Breadcrumbs />
        <SiteSearch />
      </div>
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  );
}