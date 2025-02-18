import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HttpProviderProps } from "../../types";

const queryClient = new QueryClient();

export const HttpProvider = ({ children }: HttpProviderProps) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}