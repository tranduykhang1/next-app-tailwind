export const Nav = () => {
    return (
        <nav className="sticky top-0 left-0 right-0 bg-background dark:bg-background-dark border-b border-border z-50">
            <ul className="container mx-auto flex justify-center p-4">
                <li className="mr-6">
                    <a
                        href="/"
                        className="text-text dark:text-text-dark hover:text-primary transition duration-150 ease-in-out"
                    >
                        Home
                    </a>
                </li>
                <li className="mr-6">
                    <a
                        href="/about"
                        className="text-text dark:text-text-dark hover:text-primary transition duration-150 ease-in-out"
                    >
                        About
                    </a>
                </li>
                <li>
                    <a
                        href="/contact"
                        className="text-text dark:text-text-dark hover:text-primary"
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};
