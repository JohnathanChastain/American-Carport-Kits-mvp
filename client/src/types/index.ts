export type User = {
    id: string;
    name: string;
    email: string;
};

export interface ApiResponse<T> {
    data: T;
    error?: string;
}

export type FetchStatus = 'idle' | 'loading' | 'succeeded' | 'failed';