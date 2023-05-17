export interface ISubscription<T> {
    call: (val: T) => void;
}
export interface IObservable<T> {
    get: () => T;
    next: (value: T) => void;
    subscribe: (functor: (value: T) => void) => () => void;
}
export declare const GetObservable: <T>(data: T) => IObservable<T>;
