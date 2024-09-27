import CustomButton from '@/components/Buttons/CusdtomButton';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/components/ui/card';
import { ArrowRight, CheckCircle, Globe, Zap } from 'lucide-react';

export default function Page() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                    Welcome to the example using Next - Tailwind
                                    - ShadcnUI - MVVM
                                </h1>
                                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                    Use the MVVM architecture to build your next
                                    project
                                </p>
                            </div>
                            <div className="space-x-4">
                                <CustomButton>
                                    Catching up here
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </CustomButton>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                    <div className="container mx-auto px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
                            The keys
                        </h2>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardHeader>
                                    <Zap className="h-6 w-6 mb-2" />
                                    <CardTitle>Use ViewModel layer</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>
                                        Write your logic in ViewModel as a hook
                                    </CardDescription>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CheckCircle className="h-6 w-6 mb-2" />
                                    <CardTitle>Use NextAuth</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>
                                        Manage the authentication flow
                                    </CardDescription>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <Globe className="h-6 w-6 mb-2" />
                                    <CardTitle>
                                        TailwindCss - ShadcnUI
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>
                                        Fast and lightweight
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
