import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
    // Matcher that includes all paths except api, static files, etc.
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
