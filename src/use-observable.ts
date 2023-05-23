import React from "react";
import { IObservable } from "./observable";

export function useObservable<T>(state$: IObservable<T>) {
  const [state, setState] = React.useState(state$.get());

  React.useEffect(() => {
    const sub = state$.subscribe(setState);
    return () => sub();
  }, [state$]);

  return state;
}