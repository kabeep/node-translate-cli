import { expect, test } from 'vitest';
import boundary from '../../src/helpers/boundary';
import { Failure } from '../../src/utils';

test('boundary - should return a Failure object when the inner function throws an error', async () => {
    function innerFunction() {
        throw new Error('Test error');
    }

    const wrappedFunction = boundary(innerFunction);

    const result = await wrappedFunction();

    expect(result).toStrictEqual(new Failure('Test error'));
});
