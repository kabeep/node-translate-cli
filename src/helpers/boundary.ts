import { catcher, type Failure } from '../utils/index.js';

type BoundaryFunction<T extends unknown[], U> = ((...arguments_: T) => U) | ((...arguments_: T) => Promise<U>);

function boundary<T extends unknown[] = unknown[], U = unknown>(function_: BoundaryFunction<T, U>) {
    return async (...arguments_: T): Promise<U | Failure> => {
        try {
            return await function_(...arguments_);
        } catch (error: unknown) {
            return catcher(error);
        }
    };
}

export default boundary;
