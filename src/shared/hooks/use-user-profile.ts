/**
 * @author Remco Stoeten
 * @description User profile management hook
 */

'use client'

import type { User } from '@/server/db/types'
import { useAuth } from '@/shared/context/auth-context'
import {
	createUserProfile,
	updateUserProfile,
	type UpdateUserInput
} from 'mutation'
import { getUserProfile } from 'query'
import { useEffect, useState } from 'react'

export default function useUserProfile() {
	const { user } = useAuth()
	const [profile, setProfile] = useState<User | null>(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<Error | null>(null)

	useEffect(() => {
		if (!user) {
			setProfile(null)
			setLoading(false)
			return
		}

		const loadProfile = async () => {
			try {
				const data = await getUserProfile(user.id)
				setProfile(data)
			} catch (err) {
				setError(
					err instanceof Error
						? err
						: new Error('Failed to load profile')
				)
			} finally {
				setLoading(false)
			}
		}

		loadProfile()
	}, [user])

	const updateProfile = async (data: UpdateUserInput) => {
		if (!user) return

		try {
			setLoading(true)
			const updated = profile
				? await updateUserProfile(user.id, data)
				: await createUserProfile(user.id, data)
			setProfile(updated)
			return updated
		} catch (err) {
			setError(
				err instanceof Error
					? err
					: new Error('Failed to update profile')
			)
			throw err
		} finally {
			setLoading(false)
		}
	}

	return {
		profile,
		loading,
		error,
		updateProfile
	}
}
