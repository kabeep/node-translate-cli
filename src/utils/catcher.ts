import { Failure } from './notify.js';

function catcher(error: unknown) {
    return new Failure(error as Error);
}

export default catcher;
