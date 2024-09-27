'use client';

import { useAppTranslations } from '@/hooks/shared/useAppTranslations';
import { Link } from '@/i18n/routing';
import { Menu } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import CustomButton from '../Buttons/CusdtomButton';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

const LangToggle = dynamic(() => import('../ModeToggle/LangToggle'));
const ThemeToggle = dynamic(() => import('../ModeToggle/ThemeToggle'));

export default function Nav() {
    const { tNav } = useAppTranslations(),
        [navItems] = useState([
            {
                title: tNav('home'),
                link: '/'
            },
            {
                title: tNav('about'),
                link: '/about'
            },
            {
                title: tNav('contact'),
                link: '/contact'
            }
        ]);

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isSticky ? 'bg-background dark:bg-background-dark shadow-md' : 'bg-transparent'}`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-4">
                    <div className="flex items-center">
                        <a
                            href="/"
                            className="text-2xl font-bold text-text dark:text-text-dark"
                        >
                            Next Tailwind
                        </a>
                    </div>
                    <nav className="hidden md:flex space-x-4">
                        {navItems.map(({ title, link }) => (
                            <Link
                                key={link}
                                href={link}
                                className="text-text dark:text-text-dark hover:text-primary transition-colors"
                            >
                                {title}
                            </Link>
                        ))}
                    </nav>
                    <div className="hidden md:flex items-center gap-3">
                        <CustomButton>Get Started</CustomButton>
                        <div className="flex items-center gap-3">
                            <LangToggle />
                            <ThemeToggle />
                        </div>
                    </div>
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <CustomButton>
                                    <Menu className="h-6 w-6" />
                                    <span className="sr-only">Toggle menu</span>
                                </CustomButton>
                            </SheetTrigger>
                            <SheetContent side="right">
                                <nav className="flex flex-col space-y-4">
                                    {navItems.map(({ title, link }) => (
                                        <a
                                            key={link}
                                            href={link}
                                            className="text-foreground hover:text-primary transition-colors"
                                        >
                                            {title}
                                        </a>
                                    ))}
                                    <CustomButton className="w-full">
                                        Get Started
                                    </CustomButton>
                                    <LangToggle />
                                    <ThemeToggle />
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
}
