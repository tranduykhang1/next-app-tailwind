import dynamic from "next/dynamic";

const Nav = dynamic(() => import("../components/Layouts/Nav"), {
    ssr: false,
});
const Footer = dynamic(() => import("../components/Layouts/Footer"), {
    ssr: false,
});

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col justify-between h-full">
            <Nav />
            {children}
            <Footer />
        </div>
    );
}
