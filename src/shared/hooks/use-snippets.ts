import { queries } from '@/shared/services/supabase/queries'
import { useCallback, useEffect, useState } from 'react'
import type { Database } from 'types'

type Snippet = Database['public']['Tables']['snippets']['Row']

export function useSnippets(userId: string) {
	const [snippets, setSnippets] = useState<Snippet[]>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<Error | null>(null)

	// Fetch snippets
	const fetchSnippets = useCallback(async () => {
		try {
			setLoading(true)
			const data = await queries.snippets.list(userId)
			setSnippets(data)
		} catch (err) {
			setError(
				err instanceof Error
					? err
					: new Error('Failed to fetch snippets')
			)
		} finally {
			setLoading(false)
		}
	}, [userId])

	// Search snippets
	const searchSnippets = useCallback(
		async (query: string) => {
			try {
				setLoading(true)
				const data = await queries.snippets.search(userId, query)
				setSnippets(data)
			} catch (err) {
				setError(
					err instanceof Error
						? err
						: new Error('Failed to search snippets')
				)
			} finally {
				setLoading(false)
			}
		},
		[userId]
	)

	// Create snippet
	const createSnippet = useCallback(
		async (snippet: Omit<Snippet, 'id' | 'created_at' | 'updated_at'>) => {
			try {
				const data = await mutations.snippets.create(snippet)
				setSnippets((prev) => [data, ...prev])
				return data
			} catch (err) {
				throw err instanceof Error
					? err
					: new Error('Failed to create snippet')
			}
		},
		[]
	)

	// Update snippet
	const updateSnippet = useCallback(
		async (id: string, updates: Partial<Snippet>) => {
			try {
				const data = await mutations.snippets.update(id, updates)
				setSnippets((prev) => prev.map((s) => (s.id === id ? data : s)))
				return data
			} catch (err) {
				throw err instanceof Error
					? err
					: new Error('Failed to update snippet')
			}
		},
		[]
	)

	// Delete snippet
	const deleteSnippet = useCallback(async (id: string) => {
		try {
			await mutations.snippets.delete(id)
			setSnippets((prev) => prev.filter((s) => s.id !== id))
		} catch (err) {
			throw err instanceof Error
				? err
				: new Error('Failed to delete snippet')
		}
	}, [])

	// Initial fetch
	useEffect(() => {
		fetchSnippets()
	}, [fetchSnippets])

	return {
		snippets,
		loading,
		error,
		searchSnippets,
		createSnippet,
		updateSnippet,
		deleteSnippet,
		refetch: fetchSnippets
	}
}
