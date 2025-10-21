import { Failure } from './notify';

function catcher(error: unknown) {
    return new Failure(error as Error);
}

export default catcher;
