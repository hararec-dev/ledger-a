import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ProviderProps } from '@types';

const queryClient = new QueryClient();

export const HttpProvider = ({ children }: ProviderProps) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};
