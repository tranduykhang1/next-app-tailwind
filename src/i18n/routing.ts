import { defaultLocale, locales } from "@/config/i18n";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
    locales,
    defaultLocale,
});

export const { Link, redirect, usePathname, useRouter } =
    createSharedPathnamesNavigation(routing);
