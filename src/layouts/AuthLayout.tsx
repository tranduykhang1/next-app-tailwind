export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div style={{paddingTop: 150}}>{children}</div>;
}
