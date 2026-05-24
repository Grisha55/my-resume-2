// middleware.ts (или proxy.ts)
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['ru', 'en'],
  defaultLocale: 'ru',
  localePrefix: 'always', // всегда показывать префикс /ru /en
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};