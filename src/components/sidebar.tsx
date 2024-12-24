"use client";

import { PlusCircle, Search, X, FolderPlus, ChevronRight, ChevronDown, Folder } from "lucide-react";
import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useSnippetStore } from "@/lib/store/snippet-store";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { SnippetActions } from "@/components/snippet-actions";

interface FolderItemProps {
  id: string;
  name: string;
  level: number;
  isOpen: boolean;
  onToggle: () => void;
  onAddSnippet: (folderId: string) => void;
  onAddFolder: (parentId: string) => void;
}

function FolderItem({ id, name, level, isOpen, onToggle, onAddSnippet, onAddFolder }: FolderItemProps) {
  const handleAddSnippet = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    onAddSnippet(id);
  }, [id, onAddSnippet]);

  const handleAddSubfolder = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    onAddFolder(id);
  }, [id, onAddFolder]);

  return (
    <div
      className="flex items-center p-2 hover:bg-secondary/50 rounded-lg cursor-pointer"
      style={{ paddingLeft: `${level * 1}rem` }}
      onClick={onToggle}
    >
      {isOpen ? (
        <ChevronDown className="w-4 h-4 mr-2" />
      ) : (
        <ChevronRight className="w-4 h-4 mr-2" />
      )}
      <Folder className="w-4 h-4 mr-2" />
      <span className="flex-1">{name}</span>
      <Button variant="ghost" size="icon" className="w-6 h-6" onClick={handleAddSnippet}>
        <PlusCircle className="w-4 h-4" />
      </Button>
      <Button variant="ghost" size="icon" className="w-6 h-6" onClick={handleAddSubfolder}>
        <FolderPlus className="w-4 h-4" />
      </Button>
    </div>
  );
}

function SnippetItem({ snippet, onClick }: { snippet: any; onClick: () => void }) {
  return (
    <div
      className={cn(
        "p-3 rounded-lg cursor-pointer transition-colors group",
        snippet.id === useSnippetStore().selectedSnippetId
          ? "bg-secondary"
          : "hover:bg-secondary/50"
      )}
      onClick={onClick}
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-medium">{snippet.title}</h3>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
          <SnippetActions snippetId={snippet.id} />
        </div>
      </div>
      <div className="flex flex-wrap gap-1">
        <Badge variant="secondary" className="bg-primary/10">
          {snippet.language}
        </Badge>
        {snippet.labels.map((label: string) => (
          <Badge key={label} variant="outline" className="border-primary/20">
            {label}
          </Badge>
        ))}
      </div>
    </div>
  );
}

export function Sidebar() {
  const [search, setSearch] = useState("");
  const [openFolders, setOpenFolders] = useState<Set<string>>(new Set());
  const { snippets, folders, selectedSnippetId, setSelectedSnippetId, addSnippet, addFolder } =
    useSnippetStore();

  const toggleFolder = useCallback((folderId: string) => {
    setOpenFolders((prev) => {
      const next = new Set(prev);
      if (next.has(folderId)) {
        next.delete(folderId);
      } else {
        next.add(folderId);
      }
      return next;
    });
  }, []);

  const filteredSnippets = snippets.filter(
    (snippet) =>
      snippet.title.toLowerCase().includes(search.toLowerCase()) ||
      snippet.labels.some((label) => label.toLowerCase().includes(search.toLowerCase()))
  );

  const createNewSnippet = useCallback((folderId: string | null = null) => {
    addSnippet({
      title: "New Snippet",
      code: "",
      language: "javascript",
      description: "",
      frameworks: [],
      labels: [],
      folderId,
    });
  }, [addSnippet]);

  const createNewFolder = useCallback((parentId: string | null = null) => {
    const name = prompt("Enter folder name:");
    if (name) {
      addFolder(name, parentId);
    }
  }, [addFolder]);

  const renderFolderContents = useCallback((parentId: string | null, level: number = 0) => {
    const childFolders = folders.filter((f) => f.parentId === parentId);
    const folderSnippets = snippets.filter((s) => s.folderId === parentId);

    return (
      <>
        {childFolders.map((folder) => (
          <div key={folder.id}>
            <FolderItem
              id={folder.id}
              name={folder.name}
              level={level}
              isOpen={openFolders.has(folder.id)}
              onToggle={() => toggleFolder(folder.id)}
              onAddSnippet={createNewSnippet}
              onAddFolder={createNewFolder}
            />
            {openFolders.has(folder.id) && renderFolderContents(folder.id, level + 1)}
          </div>
        ))}
        {folderSnippets.map((snippet) => (
          <SnippetItem
            key={snippet.id}
            snippet={snippet}
            onClick={() => setSelectedSnippetId(snippet.id)}
          />
        ))}
      </>
    );
  }, [folders, snippets, openFolders, setSelectedSnippetId, toggleFolder, createNewSnippet, createNewFolder]);

  return (
    <div className="h-screen border-r bg-card">
      <div className="p-4 space-y-4">
        <div className="flex gap-2">
          <Button
            variant="default"
            className="flex-1 justify-start space-x-2"
            onClick={() => createNewSnippet(null)}
          >
            <PlusCircle size={16} />
            <span>New Snippet</span>
          </Button>
          <Button variant="outline" size="icon" onClick={() => createNewFolder(null)}>
            <FolderPlus size={16} />
          </Button>
        </div>
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search snippets..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-8 bg-background"
          />
          {search && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-full"
              onClick={() => setSearch("")}
            >
              <X size={16} />
            </Button>
          )}
        </div>
      </div>
      <ScrollArea className="h-[calc(100vh-8rem)]">
        <div className="p-4 space-y-2">
          {search ? (
            filteredSnippets.map((snippet) => (
              <SnippetItem
                key={snippet.id}
                snippet={snippet}
                onClick={() => setSelectedSnippetId(snippet.id)}
              />
            ))
          ) : (
            <>
              {renderFolderContents(null)}
              {snippets
                .filter((s) => s.folderId === null)
                .map((snippet) => (
                  <SnippetItem
                    key={snippet.id}
                    snippet={snippet}
                    onClick={() => setSelectedSnippetId(snippet.id)}
                  />
                ))}
            </>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}