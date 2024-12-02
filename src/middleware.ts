/**
 * @author Remco Stoeten
 * @description Authentication middleware
 */

import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
    // Check if user is authenticated
    const user = request.cookies.get('user')
    const isAuthPage = request.nextUrl.pathname.startsWith('/auth')

    if (!user && !isAuthPage) {
        // Redirect to login if accessing protected route while not authenticated
        return NextResponse.redirect(new URL('/auth/login', request.url))
    }

    if (user && isAuthPage) {
        // Redirect to dashboard if accessing auth pages while authenticated
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/dashboard/:path*', '/auth/:path*']
} 
