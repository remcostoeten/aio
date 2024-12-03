/**
 * @author Remco Stoeten
 * @description Next-intl configuration
 */

import { Pathnames } from 'next-intl/navigation';
import createMiddleware from 'next-intl/middleware';

// Define supported locales
export const locales = ['en', 'nl'] as const;
export type Locale = typeof locales[number];

// Default locale
export const defaultLocale = 'en' as const;

// Configure routing paths
export const pathnames = {
    '/': '/',
    '/login': '/login',
    '/register': '/register',
} satisfies Pathnames<typeof locales>;

// Locale prefix strategy
export const localePrefix = 'as-needed';

export type PathnameLocale = typeof pathnames;

// Create and export middleware configuration
export default createMiddleware({
    defaultLocale,
    locales,
    localePrefix,
    pathnames
});

// Export config for middleware matcher
export const config = {
    matcher: ['/((?!api|_next|.*\\..*).*)', '/']
};