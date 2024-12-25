/**
 * @author Remco Stoeten
 * @description Snippet query handlers for fetching snippet data
 */

import { db } from 'db'
import type { Snippet } from '@/server/db/types'

export async function getSnippets(): Promise<Snippet[]> {
  return db.query.snippets.findMany()
}

export async function getSnippetById(id: string): Promise<Snippet | null> {
  return db.query.snippets.findFirst({
    where: { id }
  })
} 
