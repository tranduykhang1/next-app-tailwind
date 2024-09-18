import { UseFormRegisterReturn } from 'react-hook-form';
import { User } from './user';

export type AuthResponse = User & {
    accessToken: string;
    refreshToken: string;
};

export type LoginPayload = {
    email: string;
    password: string;
};

export type RegisterPayload = {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    confirmPassword?: string;
};

export type FormLoginReturn = {
    email: UseFormRegisterReturn<'email'>;
    password: UseFormRegisterReturn<'password'>;
};

export type NextAuthPayload = AuthResponse & {
    user: User;
};
