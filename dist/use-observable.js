import React from "react";
export function useObservable(state$) {
    const [state, setState] = React.useState(state$.get());
    React.useEffect(() => {
        const sub = state$.subscribe(setState);
        return () => sub();
    }, [state$]);
    return state;
}
//# sourceMappingURL=use-observable.js.map