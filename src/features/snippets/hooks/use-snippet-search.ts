
import { useState, useCallback, useMemo } from 'react';
import { useSnippetStore } from '../store';

export function useSnippetSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const snippets = useSnippetStore((state) => state.snippets);

  const filteredSnippets = useMemo(() => {
    if (!searchTerm) return snippets;
    
    const term = searchTerm.toLowerCase();
    return snippets.filter((snippet) => 
      snippet.title.toLowerCase().includes(term) ||
      snippet.description.toLowerCase().includes(term) ||
      snippet.labels.some(label => label.toLowerCase().includes(term))
    );
  }, [snippets, searchTerm]);

  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term);
  }, []);

  return {
    searchTerm,
    filteredSnippets,
    handleSearch,
  };
}