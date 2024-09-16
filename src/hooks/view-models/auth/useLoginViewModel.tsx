/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { ROUTE_HOME } from "@/enums/router";
import { useRouter } from "@/i18n/routing";
import { zodResolver } from "@hookform/resolvers/zod";

import { useToast } from "@/hooks/shared/useToast";
import { loginValidationSchema } from "@/schema/auth";
import { LoginPayload } from "@/types/auth";
import { signIn } from "next-auth/react";
import { BaseSyntheticEvent, useEffect, useState } from "react";
import {
    FieldValues,
    SubmitHandler,
    useForm,
    UseFormHandleSubmit,
    UseFormRegister,
} from "react-hook-form";
// type Props = {};
export type UseLoginViewModelValue<T extends FieldValues> = {
    onLogin: SubmitHandler<T>;
    register: UseFormRegister<T>;
    handleSubmit: UseFormHandleSubmit<T>;
    formErrors: T;
};

export const useLoginViewModel = (): UseLoginViewModelValue<LoginPayload> => {
    const {
            register,
            handleSubmit,
            formState: { errors },
        } = useForm<LoginPayload>({
            resolver: zodResolver(loginValidationSchema),
        }),
        [formErrors, setFormErrors] = useState<LoginPayload>({
            email: "",
            password: "",
        }),
        { toast } = useToast();

    const router = useRouter();

    useEffect(() => {
        const newErrors = { ...formErrors };
        Object.keys(errors).forEach((errKey) => {
            newErrors[errKey as keyof LoginPayload] = errors[
                errKey as keyof LoginPayload
            ]?.message as string;
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
        const res = await signIn("credentials", {
            ...data,
            redirect: false,
        });

        if (res?.ok) {
            router.replace(ROUTE_HOME.DEFAULT);
            return;
        }
        toast({
            variant: "destructive",
            title: res?.error as string,
        });
    };

    return {
        onLogin: onSubmit,
        handleSubmit,
        register,
        formErrors,
    };
};
