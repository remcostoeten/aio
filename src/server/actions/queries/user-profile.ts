/**
 * @author Remco Stoeten
 * @description User profile queries
 */

import { supabase } from 'db'

export async function getUserProfile(userId: string) {
	const { data, error } = await supabase
		.from('profiles')
		.select('*')
		.eq('user_id', userId)
		.single()

	if (error) throw error
	return data
}
