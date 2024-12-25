/**
 * @author Remco Stoeten
 * @description Search index configuration and data
 */

import { router } from '@/routes'
import {
	CodeIcon,
	FolderPlusIcon,
	NavigationIcon,
	PlusIcon
} from 'lucide-react'
import type { ReactNode } from 'react'

type SearchItem = {
	id: string
	title: string
	description?: string
	icon?: ReactNode
	keywords: string[]
	action?: () => void
}

export const searchIndex: SearchItem[] = [
	// Navigation items
	{
		id: 'navigation',
		title: 'Navigation',
		description: 'Quick navigation to different sections',
		icon: NavigationIcon,
		keywords: ['navigate', 'menu', 'sections']
	},

	// Code snippets
	{
		id: 'snippets',
		title: 'Code Snippets',
		description: 'Manage your code snippets',
		icon: CodeIcon,
		keywords: ['code', 'snippets', 'editor', 'programming', 'development']
	},

	// Actions
	{
		id: 'new-snippet',
		title: 'New Snippet',
		description: 'Create a new code snippet',
		icon: PlusIcon,
		keywords: ['create', 'new', 'snippet', 'add'],
		action: () => router.navigate('/snippets/new')
	},

	{
		id: 'new-folder',
		title: 'New Folder',
		description: 'Create a new folder',
		icon: FolderPlusIcon,
		keywords: ['create', 'new', 'folder', 'organize'],
		action: () => router.navigate('/folders/new')
	}
]
