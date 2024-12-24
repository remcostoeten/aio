"use client";

import { Search } from "lucide-react";
import { Input } from '@/shared/components/ui';

export function SiteSearch() {
  return (
    <div className="relative w-96">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        placeholder="Search..."
        className="pl-8 bg-background"
      />
    </div>
  );
}
