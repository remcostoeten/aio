
import { MainLayout } from "@/shared/layouts"
import { Sidebar } from "./sidebar"
import { SnippetHub } from "./snippet-hub"
import { Metadata } from "./metadata"

export function CodeSnippets() {
  return (
    <MainLayout
      navigationContent={<Sidebar />}
      mainContent={<SnippetHub />}
      detailsContent={<Metadata />}
    />
  )
}