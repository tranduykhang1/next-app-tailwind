import { Locale } from '@/config/i18n';
import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from './routing';

export default getRequestConfig(async ({ locale }) => {
    if (!routing.locales.includes(locale as Locale)) notFound();

    return {
        messages: (await import(`./messages/${locale}.json`)).default
    };
});
