import { useTranslations } from "next-intl";

export default function Page() {
    const title = useTranslations("Title");
    const button = useTranslations("Button");

    return <div></div>;
}
