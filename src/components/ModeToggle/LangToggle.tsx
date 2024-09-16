"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { useTransition } from "react";
import TextTransition, { presets } from "react-text-transition";

export default function LangToggle() {
    const router = useRouter(),
        [isPending, startTransition] = useTransition(),
        pathname = usePathname(),
        params = useParams(),
        locale = useLocale();

    const onSelectChange = (nextLocale: string) => {
        startTransition(() => {
            router.replace(
                // @ts-expect-error -- TypeScript will validate that only known `params`
                // are used in combination with a given `pathname`. Since the two will
                // always match for the current route, we can skip runtime checks.
                { pathname, params },
                { locale: nextLocale }
            );
        });
    };

    return (
        <div className="cursor-pointer">
            <TextTransition springConfig={presets.wobbly}>
                <span
                    className="font-bold"
                    onClick={() => {
                        if (!isPending) {
                            onSelectChange(locale === "en" ? "vi" : "en");
                        }
                    }}
                >
                    {locale}
                </span>
            </TextTransition>
        </div>
    );
}
