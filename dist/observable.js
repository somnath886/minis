class Subscription {
    constructor(functor) {
        this.call = functor;
    }
}
class Observable {
    constructor(value) {
        this._subs = [];
        this.get = () => this._value;
        this.next = (value) => {
            this._value = value;
            this._subs.forEach((s) => s.call(value));
        };
        this.subscribe = (functor) => {
            const sub = new Subscription(functor);
            this._subs.push(sub);
            return () => {
                this._subs = this._subs.filter((s) => s !== sub);
            };
        };
        this._value = value;
    }
}
export const GetObservable = (data) => new Observable(data);
//# sourceMappingURL=observable.js.map