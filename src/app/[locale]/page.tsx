import { ClassNameMode } from "@/utils/classes";
import { useTranslations } from "next-intl";

export default function Page() {
    const title = useTranslations("Title");
    const button = useTranslations("Button");

    return (
        <div className="flex flex-col items-center justify-center bg-background dark:bg-background-dark pt-40">
            <h1 className={ClassNameMode.text("text-6xl font-bold my-10")}>
                {title("page")}
            </h1>
            <p className={ClassNameMode.text("text-2xl")}>
                This is a template for a Next.js app with Tailwind CSS, using
                the
                <a
                    href="https://github.com/timneutkens/next-intl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={ClassNameMode.text("text-link mx-1")}
                >
                    next-intl
                </a>{" "}
                library for i18n.
            </p>
            <p className="mt-4 text-2xl">This is the {button("login")} page.</p>
        </div>
    );
}
