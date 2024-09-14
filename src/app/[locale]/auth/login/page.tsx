"use client";

import Button from "@/components/Buttons/Button";
import { FormInput } from "@/components/Inputs/FormInput";
import { useLoginViewModel } from "@/hooks/view-models/auth/useLoginViewModel";

export default function LoginPage() {
    const { register, formErrors, handleSubmit, onLogin } = useLoginViewModel();
    return (
        <div className="flex flex-col w-full md:w-1/2 xl:w-2/5 2xl:w-2/6 3xl:w-1/3 mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14 bg-[#ffffff] rounded-2xl shadow-xl mt-24">
            <div className="flex flex-col justify-center mx-auto items-center gap-3 pb-4">
                {/* <div>
                    <img src="/favicon.svg" width="50" alt="Logo" />
                </div> */}
                <h1 className="text-3xl font-bold text-[#4B5563] my-auto">
                    Login
                </h1>
            </div>
            <div className="text-sm font-light text-[#6B7280] pb-8 mx-auto"></div>
            <form className="flex flex-col" onSubmit={handleSubmit(onLogin)}>
                <FormInput
                    register={register.email}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="name@company.com"
                    autoComplete="off"
                    label="Email"
                    error={formErrors["email"]}
                />

                <FormInput
                    register={register.password}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••••"
                    label="Password"
                    autoComplete="current-password"
                    error={formErrors["password"]}
                />
                <Button type="submit">Login</Button>
                <div className="text-sm font-light text-[#6B7280] text-center">
                    Do not have an account yet?{" "}
                    <a
                        href="#"
                        className="font-medium text-[#4F46E5] hover:underline"
                    >
                        Sign Up
                    </a>
                </div>
            </form>
        </div>
    );
}
