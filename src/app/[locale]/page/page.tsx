import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function Page() {
    const title = useTranslations("Title");
    const button = useTranslations("Button");
    return (
        <div>
            <h1>{title("page")}</h1>
            <Link href="/auth/login">{button("login")}</Link>
        </div>
    );
}
