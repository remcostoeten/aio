/**
 * @author Remco Stoeten
 * @description Snippet sidebar component for navigation and snippet management
 */

import type { Snippet } from '@/server/db/types'
import { cn } from '@/shared/helpers'
import { Plus, Search } from 'lucide-react'
import { useState } from 'react'
import { Badge, Button, Input, ScrollArea } from 'ui'
import { useSnippetStore } from '../store/snippet-store'

export function Sidebar() {
	const { snippets, selectedSnippetId, selectSnippet, createSnippet } =
		useSnippetStore()
	const [searchQuery, setSearchQuery] = useState('')

	const filteredSnippets = snippets.filter((snippet: Snippet) =>
		snippet.title.toLowerCase().includes(searchQuery.toLowerCase())
	)

	return (
		<div className="w-80 border-r bg-card">
			<div className="p-4 border-b">
				<div className="flex items-center gap-2">
					<Input
						placeholder="Search snippets..."
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						className="bg-background"
					/>
					<Button size="icon" variant="ghost" className="shrink-0">
						<Search className="h-4 w-4" />
					</Button>
				</div>
				<Button className="w-full mt-4" onClick={() => createSnippet()}>
					<Plus className="h-4 w-4 mr-2" />
					New Snippet
				</Button>
			</div>
			<ScrollArea className="h-[calc(100vh-8.5rem)]">
				<div className="p-4 space-y-2">
					{filteredSnippets.map((snippet: Snippet) => (
						<button
							key={snippet.id}
							onClick={() => selectSnippet(snippet.id)}
							className={cn(
								'w-full text-left p-3 rounded-lg transition-colors',
								'hover:bg-accent',
								selectedSnippetId === snippet.id && 'bg-accent'
							)}
						>
							<div className="space-y-2">
								<div className="flex items-center justify-between">
									<span className="font-medium">
										{snippet.title || 'Untitled'}
									</span>
									{snippet.isDraft && (
										<Badge
											variant="outline"
											className="text-xs"
										>
											Draft
										</Badge>
									)}
								</div>
								{snippet.description && (
									<p className="text-sm text-muted-foreground line-clamp-2">
										{snippet.description}
									</p>
								)}
								{snippet.language && (
									<Badge
										variant="secondary"
										className="text-xs"
									>
										{snippet.language}
									</Badge>
								)}
							</div>
						</button>
					))}
				</div>
			</ScrollArea>
		</div>
	)
}
