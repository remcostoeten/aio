import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { v4 as uuidv4 } from 'uuid';
import { Folder } from '@/core/types';

interface FolderState {
  folders: Folder[];
  addFolder: (name: string, parentId: string | null) => void;
  updateFolder: (id: string, name: string) => void;
  deleteFolder: (id: string) => void;
}

export const useFolderRepository = create<FolderState>()(
  persist(
    immer((set) => ({
      folders: [],
      addFolder: (name, parentId) =>
        set((state) => {
          state.folders.push({
            id: uuidv4(),
            name,
            parentId,
          });
        }),
      updateFolder: (id, name) =>
        set((state) => {
          const folder = state.folders.find((f) => f.id === id);
          if (folder) {
            folder.name = name;
          }
        }),
      deleteFolder: (id) =>
        set((state) => {
          state.folders = state.folders.filter((f) => f.id !== id);
        }),
    })),
    {
      name: 'folder-storage',
      version: 1,
    }
  )
);