import { InputHTMLAttributes } from "react";
import { Label } from "../ui/label";
import { CustomInput } from "./CustomInput";

export type FormInputProps = InputHTMLAttributes<HTMLInputElement> & {
    error?: string;
    register: any;
    label: string;
};

export const CustomFormInput = ({
    label,
    error,
    register,
    ...props
}: FormInputProps) => {
    return (
        <div className="pb-6">
            <Label
                htmlFor={props?.name}
                className="block mb-2 text-sm font-medium text-form-dark dark:text-primary"
            >
                {label}
            </Label>

            <div className="text-gray-400">
                <CustomInput
                    register={register}
                    id={props.id}
                    error={error}
                    {...props}
                />
            </div>
        </div>
    );
};
