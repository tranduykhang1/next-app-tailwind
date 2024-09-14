"use client";
import AuthGuard from "@/components/Guards/AuthGuard";
import { SessionProvider } from "next-auth/react";
import { Suspense } from "react";
import { Footer } from "../components/Layouts/Footer";
import { Nav } from "../components/Layouts/Nav";
import LoadingPage from "@/app/loading";

export const SubLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Suspense fallback={<LoadingPage />}>
            <SessionProvider>
                <AuthGuard>
                    <MainLayout>{children}</MainLayout>
                </AuthGuard>
            </SessionProvider>
        </Suspense>
    );
};

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col justify-between">
            <Nav />
            {children}
            <Footer />
        </div>
    );
};
