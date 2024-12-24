"use client";

import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSnippetStore } from "@/lib/store/snippet-store";
import { toast } from "sonner";

export function SnippetActions({ snippetId }: { snippetId: string }) {
  const { duplicateSnippet } = useSnippetStore();

  const handleDuplicate = () => {
    duplicateSnippet(snippetId);
    toast.success("Snippet duplicated successfully");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="w-6 h-6"
      onClick={handleDuplicate}
      title="Duplicate snippet"
    >
      <Copy className="w-4 h-4" />
    </Button>
  );
}