// create the custom button component
import { type ButtonHTMLAttributes } from "react";
import { Loading } from "../Icons/Loading";
import { Button } from "../ui/button";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean;
}

export default function CustomButton({ loading, ...props }: ButtonProps) {
    return (
        <Button
            disabled={loading}
            className="w-full text-buttonText bg-button focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6"
            {...props}
        >
            {loading && <Loading />}
            {props.children}
        </Button>
    );
}
