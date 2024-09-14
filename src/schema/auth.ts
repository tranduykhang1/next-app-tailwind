import { FormLoginReturn, LoginPayload } from "@/types/auth";
import { UseFormRegister } from "react-hook-form";

export const loginValidationSchema = (
    register: UseFormRegister<LoginPayload>
): FormLoginReturn => ({
    email: register("email", {
        required: true,
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
        },
    }),
    password: register("password", {
        required: true,
        minLength: 6,
    }),
});

// export const registerValidationSchema = Yup.object({
//     email: Yup.string().email("Invalid email address").required("Required"),
//     firstName: Yup.string().required("Required"),
//     lastName: Yup.string().required("Required"),
//     password: Yup.string()
//         .required("Required")
//         .min(8, "Password must be at least 8 characters long"),
//     confirmPassword: Yup.string()
//         .required("Required")
//         .min(8, "Password must be at least 8 characters long"),
// });
