/**
 * @author Remco Stoeten
 * @description Middleware for handling internationalization routing
 */

import { defaultLocale, localePrefix, locales, pathnames } from '../next-intl.config';
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  defaultLocale,
  locales,
  localePrefix,
  pathnames
});

export const config = {
  matcher: [
    '/',
    '/(en)/:path*',
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
};
