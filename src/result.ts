class Value<T> {
  value: T;
  error: null;

  constructor(value: T) {
    this.value = value;
  }
}

class Error<E> {
  value: null;
  error: E;

  constructor(error: E) {
    this.error = error;
  }
}

type IResult<T, E> = Value<T> | Error<E>;

/**
 * @example
 * const resultValue = ResultValue<number, string>(2);
 */
export const ResultValue = <T, E>(value: T): IResult<T, E> => new Value(value);
/**
 * @example
 * const resultValue = ResultError<number, string>("Some Error");
 */
export const ResultError = <T, E>(error: E): IResult<T, E> => new Error(error);

export const MapperAsync = <TD, TE, ND, NE>(
  first: IResult<TD, TE>,
  apply: (prev: TD) => Promise<IResult<ND, NE>>,
  error: (prev: TE) => Promise<IResult<ND, NE>>
) => (first instanceof Value ? apply(first.value) : error(first.error));

export const MapperSync = <TD, TE, ND, NE>(
  first: IResult<TD, TE>,
  apply: (prev: TD) => IResult<ND, NE>,
  error: (prev: TE) => IResult<ND, NE>
) => (first instanceof Value ? apply(first.value) : error(first.error));
