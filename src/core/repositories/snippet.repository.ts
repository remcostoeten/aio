import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { v4 as uuidv4 } from 'uuid';
import { Snippet, Version } from '@/core/types';

interface SnippetState {
  snippets: Snippet[];
  selectedSnippetId: string | null;
  addSnippet: (snippet: Omit<Snippet, 'id' | 'createdAt' | 'updatedAt' | 'versions' | 'isDraft'>) => string;
  updateSnippet: (id: string, snippet: Partial<Snippet>, shouldVersion?: boolean) => void;
  publishSnippet: (id: string, message?: string) => void;
  deleteSnippet: (id: string) => void;
  duplicateSnippet: (id: string) => string;
  setSelectedSnippetId: (id: string | null) => void;
}

export const useSnippetRepository = create<SnippetState>()(
  persist(
    immer((set) => ({
      snippets: [],
      selectedSnippetId: null,
      addSnippet: (newSnippet) => {
        const id = uuidv4();
        set((state) => {
          const snippet = {
            ...newSnippet,
            id,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            versions: [],
            isDraft: true,
          };
          state.snippets.push(snippet);
          state.selectedSnippetId = snippet.id;
        });
        return id;
      },
      updateSnippet: (id, updatedSnippet, shouldVersion = false) =>
        set((state) => {
          const snippet = state.snippets.find((s) => s.id === id);
          if (snippet) {
            const now = new Date().toISOString();
            Object.assign(snippet, {
              ...updatedSnippet,
              updatedAt: now,
            });
            
            if (shouldVersion && updatedSnippet.code !== undefined) {
              snippet.versions.push({
                id: uuidv4(),
                code: updatedSnippet.code,
                timestamp: now,
              });
              snippet.lastPublishedAt = now;
              snippet.isDraft = false;
            }
          }
        }),
      publishSnippet: (id, message) =>
        set((state) => {
          const snippet = state.snippets.find((s) => s.id === id);
          if (snippet) {
            const now = new Date().toISOString();
            snippet.versions.push({
              id: uuidv4(),
              code: snippet.code,
              timestamp: now,
              message,
            });
            snippet.lastPublishedAt = now;
            snippet.isDraft = false;
            snippet.updatedAt = now;
          }
        }),
      deleteSnippet: (id) =>
        set((state) => {
          state.snippets = state.snippets.filter((s) => s.id !== id);
          if (state.selectedSnippetId === id) {
            state.selectedSnippetId = null;
          }
        }),
      duplicateSnippet: (id) =>
        set((state) => {
          const sourceSnippet = state.snippets.find((s) => s.id === id);
          if (sourceSnippet) {
            const newId = uuidv4();
            const duplicatedSnippet: Snippet = {
              ...sourceSnippet,
              id: newId,
              title: `${sourceSnippet.title} (Copy)`,
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
              versions: [],
              isDraft: true,
            };
            state.snippets.push(duplicatedSnippet);
            state.selectedSnippetId = newId;
            return newId;
          }
          return id;
        }),
      setSelectedSnippetId: (id) =>
        set((state) => {
          state.selectedSnippetId = id;
        }),
    })),
    {
      name: 'snippet-storage',
      version: 1,
    }
  )
);