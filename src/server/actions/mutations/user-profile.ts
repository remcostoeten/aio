/**
 * @author Remco Stoeten
 * @description User profile mutations
 */

import { supabase } from 'db'
import type { Database } from 'types'

export type UpdateUserInput = Database['public']['Tables']['profiles']['Update']

export async function createUserProfile(userId: string, data: UpdateUserInput) {
	const { data: profile, error } = await supabase
		.from('profiles')
		.insert([{ user_id: userId, ...data }])
		.select()
		.single()

	if (error) throw error
	return profile
}

export async function updateUserProfile(userId: string, data: UpdateUserInput) {
	const { data: profile, error } = await supabase
		.from('profiles')
		.update(data)
		.eq('user_id', userId)
		.select()
		.single()

	if (error) throw error
	return profile
}
