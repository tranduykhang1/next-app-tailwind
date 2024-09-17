"use client";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useAppTranslations } from "@/hooks/shared/useAppTranslations";
import { useRouter } from "@/i18n/routing";
import { useState } from "react";
import dynamic from "next/dynamic";
import { ClassNameMode } from "@/utils/classes";

const LangToggle = dynamic(() => import("../ModeToggle/LangToggle"));
const ThemeToggle = dynamic(() => import("../ModeToggle/ThemeToggle"));

export default function Nav() {
    const router = useRouter(),
        { tNav } = useAppTranslations(),
        [navItems] = useState([
            {
                title: tNav("home"),
                link: "/",
            },
            {
                title: tNav("about"),
                link: "/about",
            },
            {
                title: tNav("contact"),
                link: "/contact",
            },
        ]);

    return (
        <div className="sticky top-0 flex items-center justify-center w-full py-5 border-b-[0.2px] border-border dark:border-border-dark">
            <NavigationMenu className={ClassNameMode.text("text-md font-bold")}>
                <NavigationMenuList className="gap-5">
                    {navItems.map(({ title, link }) => (
                        <NavigationMenuItem
                            key={title}
                            className="cursor-pointer"
                        >
                            <NavigationMenuLink
                                onClick={() => router.push(link)}
                                className="hover:bg-hover dark:hover:bg-hover-dark rounded-2xl px-5 py-3 transition ease-in-out delay-20"
                            >
                                {title}
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
            <div className="absolute flex gap-4 top-5 right-5">
                <LangToggle />
                <ThemeToggle />
            </div>
        </div>
    );
}
