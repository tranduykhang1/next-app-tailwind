"use client";
import LoadingPage from "@/app/loading";
import AuthGuard from "@/components/Guards/AuthGuard";
import { ROUTE_AUTH } from "@/enums/router";
import { SessionProvider } from "next-auth/react";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const AuthLayout = dynamic(() => import("./AuthLayout"), {
    loading: () => <LoadingPage />,
});
const MainLayout = dynamic(() => import("./MainLayout"), {
    loading: () => <LoadingPage />,
});

export function SubLayout({ children }: { children: React.ReactNode }) {
    const { pathname } = (window && window.location) || "";

    const withoutNavRoute = pathname.includes(ROUTE_AUTH.DEFAULT);

    console.log({ pathname });

    return (
        <Suspense fallback={<LoadingPage />}>
            <SessionProvider>
                {withoutNavRoute ? (
                    <AuthLayout>{children}</AuthLayout>
                ) : (
                    <AuthGuard>
                        <MainLayout>{children}</MainLayout>
                    </AuthGuard>
                )}
            </SessionProvider>
        </Suspense>
    );
}
