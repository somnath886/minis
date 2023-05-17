export type TResponse<T, E> = {
    data: T;
    error: null;
} | {
    data: null;
    error: E;
};
interface IJSONFetcher {
    /**
     * @description Must adhere to the specified {@link TResponse} type JSON
     */
    Get: <T, E>() => Promise<TResponse<T, E>>;
    /**
     * @description Must adhere to the specified {@link TResponse} type JSON
     */
    Post_Or_Update: <T, E>(b: string, method: 'POST' | 'PATCH' | 'PUT') => Promise<TResponse<T, E>>;
    /**
     * @description Must adhere to the specified {@link TResponse} type JSON
     */
    Delete: <T, E>() => Promise<TResponse<T, E>>;
}
export declare const GetJSONFetcherInterface: (url: string, extraHeaders?: {
    [key: string]: string;
} | undefined) => IJSONFetcher;
export {};
