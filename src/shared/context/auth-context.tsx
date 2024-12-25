/**
 * @author Remco Stoeten
 * @description Authentication context and hook
 */

import type { User } from '@/server/db/types'
import type { ReactNode } from 'react'
import { createContext, useContext, useState } from 'react'

type AuthContextType = {
	user: User | null
	setUser: (user: User | null) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<User | null>(null)
	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	)
}

export function useAuth() {
	const context = useContext(AuthContext)
	if (context === undefined) {
		throw new Error('useAuth must be used within an AuthProvider')
	}
	return context
}
