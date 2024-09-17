"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { useTransition } from "react";
import TextTransition, { presets } from "react-text-transition";

export default function LangToggle() {
    const router = useRouter(),
        [isPending, startTransition] = useTransition(),
        pathname = usePathname(),
        locale = useLocale();

    const onSelectChange = (nextLocale: string) => {
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale as any });
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
