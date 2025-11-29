import { shallowEqual } from '../utils';

export type BaseState = object;

export type StateListener<TState> = (state: TState, prevState: TState) => void;

export type StateSelector<TState, TSlice> = (state: TState) => TSlice;

export type CleanupCallback = () => void;

export type EffectCallback<TSlice> = (
    deps: TSlice,
    prevDeps: TSlice | undefined,
) => undefined | CleanupCallback;

export type SetStatePartial<TState> =
    | Partial<TState>
    | ((state: TState) => Partial<TState>);

export interface StoreInstance<TState extends BaseState> {
    getState: () => TState;
    setState: (partial: SetStatePartial<TState>) => void;
    subscribe: (listener: StateListener<TState>) => CleanupCallback;
    /**
     * Register effects
     * @param selector - Returns the data slice that Effect depends on
     * @param callback - Callback executed when dependencies change
     * @param options
     */
    effect: <TSlice>(
        selector: StateSelector<TState, TSlice>,
        callback: EffectCallback<TSlice>,
        options?: { immediately?: boolean },
    ) => CleanupCallback;
    destroy: () => void;
}

function createStore<TState extends BaseState>(
    initialState: TState,
): StoreInstance<TState> {
    let state = initialState;
    const listeners = new Set<StateListener<TState>>();

    const getState = () => state;

    const setState = (partial: SetStatePartial<TState>) => {
        const partialState =
            typeof partial === 'function' ? partial(state) : partial;

        if (Object.is(partialState, state)) return;

        const prevState = state;
        state = { ...state, ...partialState };

        for (const listener of listeners) {
            listener(state, prevState);
        }
    };

    const subscribe = (listener: StateListener<TState>) => {
        listeners.add(listener);
        return () => {
            listeners.delete(listener);
        };
    };

    const destroy = () => {
        listeners.clear();
    };

    const effect = <TSlice>(
        selector: StateSelector<TState, TSlice>,
        callback: EffectCallback<TSlice>,
        options: { immediately?: boolean } = {},
    ) => {
        let currentDeps = selector(state);
        let cleanupFn: CleanupCallback | undefined;

        const listener = (nextState: TState) => {
            const nextDeps = selector(nextState);

            if (!shallowEqual(currentDeps, nextDeps)) {
                const prevDeps = currentDeps;
                currentDeps = nextDeps;

                if (typeof cleanupFn === 'function') cleanupFn();

                cleanupFn = callback(nextDeps, prevDeps);
            }
        };

        const unsubscribe = subscribe(listener);

        if (options.immediately) cleanupFn = callback(currentDeps, undefined);

        return () => {
            unsubscribe();
            if (typeof cleanupFn === 'function') cleanupFn();
        };
    };

    return {
        getState,
        setState,
        subscribe,
        effect,
        destroy,
    };
}

export default createStore;
