export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export interface RequestConfig<T> {
    headers?: HeadersInit_;
    baseURL: string;
    body?: T;
    endpoint: string;
    method: HttpMethod;
    timeout?: number;
}
