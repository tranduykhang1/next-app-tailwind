//generate the custom input

import { type InputHTMLAttributes } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    error?: string;
    register: any;
};

export const Input = ({ error, register, className, ...props }: InputProps) => {
    return (
        <div className="">
            <input
                className={`mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4"
2 ${className} ${error ? "border-red-500" : ""}`}
                {...register}
                {...props}
            />
            {error && <div className="text-red-500 text-sm">{error ? error.charAt(0).toUpperCase() + error.slice(1) : ""}</div>}
        </div>
    );
};
