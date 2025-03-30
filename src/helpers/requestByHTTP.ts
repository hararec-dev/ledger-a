import type { RequestConfig } from '../types';

export const genericHttpRequest = async <RequestType, ResponseType>({
    headers,
    baseURL,
    body,
    endpoint,
    method,
    timeout = 10000,
}: RequestConfig<RequestType>): Promise<ResponseType> => {
    const url = new URL(endpoint, baseURL).toString();
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
        const requestConfig: RequestInit = {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
            signal: controller.signal,
        };

        if (body) {
            requestConfig.body = JSON.stringify(body);
        }

        const response = await fetch(url, requestConfig);
        clearTimeout(timeoutId);

        if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`);
        }

        return await response.json() as ResponseType;
    } catch (error) {
        if ((error as Error).name === 'AbortError') {
            throw new Error(`Request timeout after ${timeout}ms`);
        }

        throw new Error(`Network error: ${(error as Error).message}`);
    } finally {
        clearTimeout(timeoutId);
    }
};
