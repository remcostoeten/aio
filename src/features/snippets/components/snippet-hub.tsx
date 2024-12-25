
import { Editor } from "@monaco-editor/react"
import { useSnippetStore } from "../store/snippet-store"
import { Input } from "@/shared/components/ui/input"
import { Button } from "@/shared/components/ui/button"
import { History } from "lucide-react"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/shared/components/ui/dialog"
import { useEditorTheme } from "@/shared/hooks/use-editor-theme"
import { ThemeSelector } from "./theme-selector"
import { NoSnippetSelected } from "./empty-states"

export function SnippetHub() {
  const { snippets, selectedSnippetId, updateSnippet, publishSnippet } = useSnippetStore()
  const [commitMessage, setCommitMessage] = useState("")
  const { theme, setTheme } = useEditorTheme()
  const selectedSnippet = snippets.find((s) => s.id === selectedSnippetId)

  if (!selectedSnippet) {
    return <NoSnippetSelected />
  }

  const handlePublish = () => {
    if (selectedSnippet) {
      publishSnippet(selectedSnippet.id, commitMessage)
      setCommitMessage("")
    }
  }

  return (
    <div className="h-full flex flex-col">
      <div className="border-b p-4 flex items-center justify-between bg-card">
        <div className="flex items-center gap-4">
          <Input
            value={selectedSnippet.title}
            onChange={(e) => updateSnippet(selectedSnippet.id, { title: e.target.value })}
            className="text-lg font-medium w-[300px] bg-background"
          />
          {selectedSnippet.isDraft && (
            <span className="text-sm text-muted-foreground px-2 py-1 rounded-md bg-muted/10 ring-1 ring-muted/20">
              Draft
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <ThemeSelector theme={theme} onThemeChange={setTheme} />
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" variant="outline">
                <History className="w-4 h-4 mr-2" />
                Publish Changes
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Publish Changes</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Input
                    placeholder="Enter a commit message (optional)"
                    value={commitMessage}
                    onChange={(e) => setCommitMessage(e.target.value)}
                  />
                </div>
                <Button onClick={handlePublish} className="w-full">
                  Publish
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="flex-1">
        <Editor
          height="100%"
          language={selectedSnippet.language}
          value={selectedSnippet.code}
          onChange={(value) => updateSnippet(selectedSnippet.id, { code: value || "" })}
          theme={theme}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: "on",
            roundedSelection: false,
            scrollBeyondLastLine: false,
            readOnly: false,
            automaticLayout: true,
            padding: { top: 16 },
            wordWrap: "on",
          }}
          className="w-full"
        />
      </div>
    </div>
  )
}