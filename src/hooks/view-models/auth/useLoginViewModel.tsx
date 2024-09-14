/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { ROUTE_HOME } from "@/enums/router";
import { useRouter } from "@/i18n/routing";
import { loginValidationSchema } from "@/schema/auth";
import { FormLoginReturn, LoginPayload } from "@/types/auth";
import { formMessageMapper } from "@/utils/form";
import { signIn } from "next-auth/react";
import { BaseSyntheticEvent, useEffect, useState } from "react";
import { SubmitHandler, useForm, UseFormHandleSubmit } from "react-hook-form";

// type Props = {};
export type UseLoginViewModelValue = {
    onLogin: SubmitHandler<LoginPayload>;
    register: FormLoginReturn;
    handleSubmit: UseFormHandleSubmit<LoginPayload>;
    formErrors: LoginPayload;
};

export const useLoginViewModel = (): UseLoginViewModelValue => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginPayload>();

    const [formErrors, setFormErrors] = useState<LoginPayload>({
        email: "",
        password: "",
    });

    const router = useRouter();

    useEffect(() => {
        const newErrors = { ...formErrors };
        Object.keys(errors).forEach((errKey) => {
            newErrors[errKey as keyof LoginPayload] = formMessageMapper(errors);
        });
        setFormErrors(newErrors);
    }, [errors]);

    const onSubmit: SubmitHandler<LoginPayload> = async (
        data: LoginPayload,
        e?: BaseSyntheticEvent
    ) => {
        e?.preventDefault();
        setFormErrors({
            email: "",
            password: "",
        });
        try {
            const res = await signIn("credentials", {
                ...data,
                redirect: false,
            });

            if (res?.ok) {
                router.replace(ROUTE_HOME.DEFAULT);
                return;
            }
        } catch (err) {
            console.log({ err });
        }
    };

    return {
        onLogin: onSubmit,
        handleSubmit,
        register: loginValidationSchema(register),
        formErrors,
    };
};
