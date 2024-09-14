import { InputHTMLAttributes } from "react";
import { Input } from "./Input";

export type FormInputProps = InputHTMLAttributes<HTMLInputElement> & {
    error?: string;
    register: any;
    label: string;
};

export const FormInput = ({
    label,
    error,
    register,
    ...props
}: FormInputProps) => {
    return (
        <div className="pb-6">
            <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-primary"
            >
                {label}
            </label>
            <div className="text-gray-400">
                <Input
                    register={register}
                    id={props.id}
                    error={error}
                    {...props}
                />
            </div>
        </div>
    );
};
