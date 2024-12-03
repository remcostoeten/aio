/**
 * @author Remco Stoeten
 * @description Query to check if user is admin
 */

'use server'

import { env } from '@/core/config/env'
import { getUserByEmail } from './get-user-by-email'

export async function getAdmin() {
    try {
        const admin = await getUserByEmail(env.ADMIN_EMAIL)
        return admin?.role === 'admin' ? admin : null
    } catch (err) {
        console.error('Failed to get admin:', err)
        return null
    }
}

