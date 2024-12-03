/**
 * @author Remco Stoeten
 * @description Main navigation bar with auth integration
 * @module features/layout/components/navbar
 * @see UserMenu
 * @see Link
 */

'use client'

import UserMenu from '@/features/auth/components/user-menu'
import Link from 'next/link'

/**
 * Navigation bar component with responsive design
 * @returns {JSX.Element} Navbar component with auth integration
 */
export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <Link
                        href="/"
                        className="text-lg font-semibold hover:text-primary"
                    >
                        AIO
                    </Link>
                    <div className="hidden md:flex items-center gap-6">
                        <Link
                            href="/dashboard"
                            className="text-sm hover:text-primary"
                        >
                            Dashboard
                        </Link>
                        <Link
                            href="/docs"
                            className="text-sm hover:text-primary"
                        >
                            Documentation
                        </Link>
                    </div>
                </div>
                <UserMenu />
            </div>
        </nav>
    )
} 
