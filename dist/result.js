class Value {
    constructor(value) {
        this.value = value;
    }
}
class Error {
    constructor(error) {
        this.error = error;
    }
}
/**
 * @example
 * const resultValue = ResultValue<number, string>(2);
 */
export const ResultValue = (value) => new Value(value);
/**
 * @example
 * const resultValue = ResultError<number, string>("Some Error");
 */
export const ResultError = (error) => new Error(error);
export const MapperAsync = (first, apply, error) => (first instanceof Value ? apply(first.value) : error(first.error));
export const MapperSync = (first, apply, error) => (first instanceof Value ? apply(first.value) : error(first.error));
//# sourceMappingURL=result.js.map