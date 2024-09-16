"use client";

import CustomButton from "@/components/Buttons/CusdtomButton";
import { CustomFormInput } from "@/components/Inputs/CustomFormInput";
import { ROUTE_AUTH } from "@/enums/router";
import { useAppTranslations } from "@/hooks/shared/useAppTranslations";
import { useLoginViewModel } from "@/hooks/view-models/auth/useLoginViewModel";
import { Link } from "@/i18n/routing";

export default function RegisterPage() {
    const { tForm, tInput, tButton, tText } = useAppTranslations();

    const { register, formErrors, handleSubmit, onLogin } = useLoginViewModel();
    return (
        <div className="flex flex-col w-full md:w-1/2 xl:w-2/5 2xl:w-2/6 3xl:w-1/3 mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14 bg-form dark:bg-form-dark rounded-2xl shadow-xl">
            <div className="flex flex-col justify-center mx-auto items-center gap-3 pb-4">
                {/* <div>
                    <img src="/favicon.svg" width="50" alt="Logo" />
                </div> */}
                <h1 className="text-3xl font-bold text-form-dark dark:text-form my-auto">
                    {tForm("register")}
                </h1>
            </div>
            <div className="text-sm font-light text-[#6B7280] pb-8 mx-auto"></div>
            <form className="flex flex-col" onSubmit={handleSubmit(onLogin)}>
                <CustomFormInput
                    register={register("email")}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="username@gmail.com"
                    autoComplete="off"
                    label={tInput("email")}
                    error={formErrors["email"]}
                />

                <CustomFormInput
                    register={register("password")}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••••"
                    label={tInput("password")}
                    autoComplete="current-password"
                    error={formErrors["password"]}
                />

                <CustomFormInput
                    register={register("password")}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••••"
                    label={tInput("confirmPassword")}
                    autoComplete="current-password"
                    error={formErrors["password"]}
                />
                <CustomButton type="submit">{tButton("register")}</CustomButton>
                <div className="text-sm font-light text-[#6B7280] text-center">
                    {tText("dontHaveAccount")}
                    <Link
                        href={ROUTE_AUTH.LOGIN}
                        className="font-medium text-white dark:text-primary ml-2"
                    >
                        {tButton("login")}
                    </Link>
                </div>
            </form>
        </div>
    );
}
