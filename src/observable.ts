export interface ISubscription<T> {
  call: (val: T) => void;
}

export interface IObservable<T> {
  get: () => T;
  next: (value: T) => void;
  subscribe: (functor: (value: T) => void) => () => void;
}

class Subscription<T> implements ISubscription<T> {
  public call: (val: T) => void;
  constructor(functor: (val: T) => void) {
    this.call = functor;
  }
}

class Observable<T> implements IObservable<T> {
  private _value: T;
  private _subs: Array<ISubscription<T>> = [];

  constructor(value: T) {
    this._value = value;
  }

  get = () => this._value;

  next = (value: T) => {
    this._value = value;
    this._subs.forEach((s) => s.call(value));
  };

  subscribe = (functor: (value: T) => void) => {
    const sub: ISubscription<T> = new Subscription(functor);
    this._subs.push(sub);
    return () => {
      this._subs = this._subs.filter((s) => s !== sub);
    };
  };
}

export const GetObservable = <T>(data: T): IObservable<T> =>
  new Observable(data);