'use client';

import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { useTransition } from 'react';
import { Loading } from '../Icons/Loading';

export default function LangToggle() {
    const [isPending, startTransition] = useTransition(),
        pathname = usePathname(),
        locale = useLocale();

    const onSelectChange = (nextLocale: string) => {
        startTransition(() => {
            startTransition(() => {
                const newPathname = pathname.replace(
                    `/${locale}`,
                    `/${nextLocale}`
                );
                window.location.href = newPathname;
            });
        });
    };

    return (
        <div className="cursor-pointer">
            {isPending ? (
                <Loading />
            ) : (
                <p
                    className="!text-text dark:!text-text-dark"
                    onClick={() => {
                        if (!isPending) {
                            onSelectChange(locale === 'en' ? 'vi' : 'en');
                        }
                    }}
                >
                    {locale}
                </p>
            )}
        </div>
    );
}
