import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                foreground: {
                    DEFAULT: "#4d76aa",
                    dark: "#ffffff",
                },
                background: {
                    DEFAULT: "#f4f6fb",
                    dark: "#1b2436",
                },
                button: {
                    dark: "#f4f6fb",
                    DEFAULT: "#1b2436",
                },
                buttonText: {
                    DEFAULT: "#f4f6fb",
                    dark: "#1b2436",
                },
                error: {
                    DEFAULT: "#304b74",
                    dark: "#ff0000",
                },
                warning: {
                    DEFAULT: "#2b4061",
                    dark: "#ffcc00",
                },
                secondary: {
                    DEFAULT: "#283852",
                    dark: "#282c34",
                },
                primary: {
                    DEFAULT: "#1b2436",
                    dark: "#f4f6fb",
                },
            },
            borderRadius: {
                lg: "16px",
                md: "12px",
                sm: "8px",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;
