declare class Value<T> {
    value: T;
    error: null;
    constructor(value: T);
}
declare class Error<E> {
    value: null;
    error: E;
    constructor(error: E);
}
type IResult<T, E> = Value<T> | Error<E>;
/**
 * @example
 * const resultValue = ResultValue<number, string>(2);
 */
export declare const ResultValue: <T, E>(value: T) => IResult<T, E>;
/**
 * @example
 * const resultValue = ResultError<number, string>("Some Error");
 */
export declare const ResultError: <T, E>(error: E) => IResult<T, E>;
export declare const MapperAsync: <TD, TE, ND, NE>(first: IResult<TD, TE>, apply: (prev: TD) => Promise<IResult<ND, NE>>, error: (prev: TE) => Promise<IResult<ND, NE>>) => Promise<IResult<ND, NE>>;
export declare const MapperSync: <TD, TE, ND, NE>(first: IResult<TD, TE>, apply: (prev: TD) => IResult<ND, NE>, error: (prev: TE) => IResult<ND, NE>) => IResult<ND, NE>;
export {};
