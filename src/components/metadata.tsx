"use client";

import { useSnippetStore, type Language, type Framework, type Version } from "@/lib/store/snippet-store";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, History, GitCommit } from "lucide-react";
import { format } from "date-fns";

const LANGUAGES: Language[] = [
  "javascript",
  "typescript",
  "python",
  "mdx",
  "css",
  "bash",
  "shell",
  "json",
];

const FRAMEWORKS: Framework[] = ["Flask", "NextJS", "React"];

function VersionItem({ version }: { version: Version }) {
  return (
    <div className="flex items-start gap-2 p-2 rounded-lg hover:bg-secondary/50">
      <GitCommit className="w-4 h-4 mt-1 text-muted-foreground" />
      <div className="space-y-1">
        <div className="text-sm font-medium">
          {version.message || "No commit message"}
        </div>
        <div className="text-xs text-muted-foreground">
          {format(new Date(version.timestamp), "PPpp")}
        </div>
      </div>
    </div>
  );
}

export function Metadata() {
  const { snippets, selectedSnippetId, updateSnippet, deleteSnippet } = useSnippetStore();
  const snippet = snippets.find((s) => s.id === selectedSnippetId);

  if (!snippet) return null;

  const handleAddLabel = () => {
    const label = prompt("Enter new label:");
    if (label && !snippet.labels.includes(label)) {
      updateSnippet(snippet.id, {
        labels: [...snippet.labels, label],
      });
    }
  };

  const handleRemoveLabel = (label: string) => {
    updateSnippet(snippet.id, {
      labels: snippet.labels.filter((l) => l !== label),
    });
  };

  const handleFrameworkToggle = (framework: Framework) => {
    const newFrameworks = snippet.frameworks.includes(framework)
      ? snippet.frameworks.filter((f) => f !== framework)
      : [...snippet.frameworks, framework];
    updateSnippet(snippet.id, { frameworks: newFrameworks });
  };

  return (
    <ScrollArea className="h-screen">
      <div className="p-6 space-y-6 bg-card h-full">
        <div className="space-y-2">
          <Label>Language</Label>
          <Select
            value={snippet.language}
            onValueChange={(value: Language) =>
              updateSnippet(snippet.id, { language: value })
            }
          >
            <SelectTrigger className="bg-background">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {LANGUAGES.map((lang) => (
                <SelectItem key={lang} value={lang}>
                  {lang}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Description</Label>
          <Textarea
            value={snippet.description}
            onChange={(e) => updateSnippet(snippet.id, { description: e.target.value })}
            placeholder="Add a description..."
            className="min-h-[100px] bg-background"
          />
        </div>

        <div className="space-y-2">
          <Label>Frameworks</Label>
          <div className="flex flex-wrap gap-2">
            {FRAMEWORKS.map((framework) => (
              <Badge
                key={framework}
                variant={snippet.frameworks.includes(framework) ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => handleFrameworkToggle(framework)}
              >
                {framework}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label>GitHub URL</Label>
          <Input
            value={snippet.githubUrl || ""}
            onChange={(e) => updateSnippet(snippet.id, { githubUrl: e.target.value })}
            placeholder="https://github.com/..."
            className="bg-background"
          />
        </div>

        <div className="space-y-2">
          <Label>Local Path</Label>
          <Input
            value={snippet.localPath || ""}
            onChange={(e) => updateSnippet(snippet.id, { localPath: e.target.value })}
            placeholder="/path/to/file"
            className="bg-background"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label>Labels</Label>
            <Button variant="ghost" size="sm" onClick={handleAddLabel}>
              <Plus size={16} />
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {snippet.labels.map((label) => (
              <Badge key={label} variant="secondary" className="space-x-1">
                <span>{label}</span>
                <button
                  onClick={() => handleRemoveLabel(label)}
                  className="ml-1 hover:text-destructive"
                >
                  ×
                </button>
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label className="flex items-center gap-2">
            <History size={16} />
            Version History
          </Label>
          <div className="space-y-2">
            {snippet.versions.length === 0 ? (
              <div className="text-sm text-muted-foreground">
                No versions yet. Publish changes to create a version.
              </div>
            ) : (
              snippet.versions.map((version) => (
                <VersionItem key={version.id} version={version} />
              ))
            )}
          </div>
        </div>

        <Button
          variant="destructive"
          className="w-full"
          onClick={() => {
            if (confirm("Are you sure you want to delete this snippet?")) {
              deleteSnippet(snippet.id);
            }
          }}
        >
          <Trash2 size={16} className="mr-2" />
          Delete Snippet
        </Button>
      </div>
    </ScrollArea>
  );
}