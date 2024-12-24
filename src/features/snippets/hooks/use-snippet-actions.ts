"use client";

import { useCallback } from 'react';
import { useSnippetStore } from '../store';
import { Snippet } from '../types';

export function useSnippetActions() {
  const { addSnippet, updateSnippet, publishSnippet, deleteSnippet, duplicateSnippet } = useSnippetStore();

  const createSnippet = useCallback((snippet: Omit<Snippet, 'id' | 'createdAt' | 'updatedAt' | 'versions' | 'isDraft'>) => {
    return addSnippet(snippet);
  }, [addSnippet]);

  const updateSnippetDetails = useCallback((id: string, details: Partial<Snippet>) => {
    updateSnippet(id, details);
  }, [updateSnippet]);

  return {
    createSnippet,
    updateSnippetDetails,
    publishSnippet,
    deleteSnippet,
    duplicateSnippet,
  };
}