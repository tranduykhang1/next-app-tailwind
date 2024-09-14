/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorResponse } from "@/types/common";
import { fetcher } from "@/utils/fetcher";
import { ReactNode } from "react";
import { SWRConfig } from "swr";

type Props = {
    children: ReactNode;
};

function SWRProvider({ children }: Props) {
    // Mocking API Responses
    // useEffect(() => {
    //   mockAPI();
    // }, []);

    return (
        <SWRConfig
            value={{
                fetcher,
                onErrorRetry: (
                    error: ErrorResponse<unknown>,
                    key: any,
                    config: any,
                    revalidate: (arg0: { retryCount: any }) => void,
                    { retryCount }: any
                ) => {
                    const _error = error as ErrorResponse<unknown>;

                    // Only retry on error 500-599
                    if (!_error.code?.startsWith("5")) return;

                    if (retryCount >= 5) return;

                    setTimeout(() => revalidate({ retryCount }), 5000);
                },
            }}
        >
            {children}
        </SWRConfig>
    );
}

export default SWRProvider;
