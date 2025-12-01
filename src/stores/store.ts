import type { Draft } from 'immer';
import { produce } from 'immer';
import { shallowEqual } from '../utils';

export type BaseState = object;

export type StateListener<TState> = (state: TState, prevState: TState) => void;

export type StateSelector<TState, TSlice> = (state: TState) => TSlice;

export type CleanupCallback = () => void;

export type EffectCallback<TSlice> = (
    deps: TSlice,
    prevDeps: TSlice | undefined,
) => undefined | CleanupCallback;

export type StateRecipe<TState> = (
    draft: Draft<TState>,
    initialState: TState,
) => TState | undefined;

export type SetStateAction<TState> = Partial<TState> | StateRecipe<TState>;

export interface StoreInstance<TState extends BaseState> {
    getState: () => TState;
    setState: (update: SetStateAction<TState>) => void;
    subscribe: (listener: StateListener<TState>) => CleanupCallback;
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

    const setState = (update: SetStateAction<TState>) => {
        let nextState: TState;

        if (typeof update === 'function')
            nextState = produce(state, update as StateRecipe<TState>) as TState;
        else nextState = { ...state, ...update };

        if (Object.is(nextState, state)) return;

        const prevState = state;
        state = nextState;

        for (const listener of listeners) listener(state, prevState);
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
