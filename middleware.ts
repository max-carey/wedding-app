import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// A list of all locales that are supported
const locales = ['en', 'de', 'es'];
const defaultLocale = 'en';

// Password protection middleware
const passwordProtection = (request: NextRequest) => {
  const isAuthenticated = request.cookies.get('wedding-auth');
  const isPasswordPage = request.nextUrl.pathname.includes('/password');
  const isStaticFile = request.nextUrl.pathname.startsWith('/_next') || 
                      request.nextUrl.pathname.startsWith('/static') ||
                      request.nextUrl.pathname.includes('.');
  
  // Allow access to password page and static files
  if (isPasswordPage || isStaticFile) {
    return null;
  }

  // Redirect to password page if not authenticated
  if (!isAuthenticated) {
    const locale = request.nextUrl.pathname.split('/')[1];
    const validLocale = locales.includes(locale) ? locale : defaultLocale;
    return NextResponse.redirect(new URL(`/${validLocale}/password`, request.url));
  }

  return null;
};

// Create the internationalization middleware
const intlMiddleware = createMiddleware({
  locales,
  defaultLocale
});

export default async function middleware(request: NextRequest) {
  // Check password protection first
  const passwordCheck = passwordProtection(request);
  if (passwordCheck) return passwordCheck;

  // Then handle internationalization
  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};