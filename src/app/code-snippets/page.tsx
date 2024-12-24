import { Metadata } from "next";
import { MainLayout } from "@/shared/layouts";
import { SnippetHub, Sidebar, Metadata as MetadataPanel } from "@/features/snippets/components";

export const metadata: Metadata = {
  title: "Code Snippets",
  description: "A modern snippet management system",
};

export default function CodeSnippetsPage() {
  return (
    <MainLayout
      navigationContent={<Sidebar />}
      mainContent={<SnippetHub />}
      detailsContent={<MetadataPanel />}
    />
  );
}