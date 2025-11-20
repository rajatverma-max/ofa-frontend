// middleware.ts
import createIntlMiddleware from 'next-intl/middleware';
import type {NextRequest, NextResponse} from 'next/server';

const intlMiddleware = createIntlMiddleware({
  locales: ['en', 'fr', 'de', 'es'],
  defaultLocale: 'en',
  localePrefix: 'never',
});

export const config = {
  matcher: [
    '/',
    '/(en|fr|de|es)/:path*',
    {
      source: '/((?!api|_next/static|_next/image|images|font|favicon.ico).*)',
      missing: [
        {type: 'header', key: 'next-router-prefetch'},
        {type: 'header', key: 'purpose', value: 'prefetch'},
      ],
    },
  ],
};

export function middleware(
  request: NextRequest
): NextResponse | void | Promise<NextResponse | void> {
  const pathname = request.nextUrl.pathname;
  const localeMatch = pathname.match(/^\/([a-z]{2})(?:\/|$)/);
  const pathnameWithoutLocale = localeMatch
    ? pathname.replace(`/${localeMatch[1]}`, '') || '/'
    : pathname;

  // next-intl's middleware may return a NextResponse or undefined
  const response = intlMiddleware(request) as NextResponse | void | undefined;

  if (response && typeof response.headers?.set === 'function') {
    response.headers.set('x-pathname', pathnameWithoutLocale);
  }

  return response;
}
