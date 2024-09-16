import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export type SnackbarVariant = "error" | "success" | "warning";

export type SnackbarProps = {
    hideProgressbar?: boolean;
    theme?: string;
};

export default function Snackbar({
    hideProgressbar = true,
    theme = "light",
}: SnackbarProps) {
    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={hideProgressbar}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme={theme}
            />
        </>
    );
}
