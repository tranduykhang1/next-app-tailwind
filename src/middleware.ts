// import createMiddleware from "next-intl/middleware";
// import { routing } from "./i18n/routing";

// export default createMiddleware(routing);

// export const config = {
//     matcher: ["/", "/(vi|en)/:path*"],
// };

import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import { defaultLocale, locales } from './config/i18n';

export default async function middleware(request: NextRequest) {
    const handleI18nRouting = createMiddleware({
        locales,
        defaultLocale
    });
    const response = handleI18nRouting(request);

    response.headers.set('locale', defaultLocale);

    return response;
}

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(vi|en)/:path*']
};
