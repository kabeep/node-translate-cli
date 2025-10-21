import { stdout } from 'node:process';
import { expect, test } from 'vitest';
import getColumns from '../../src/utils/get-columns.js';

test('getColumns - should return the number of columns', () => {
    stdout.columns = 80;
    const result = getColumns();
    expect(result).toBe(80);
});

test('getColumns - should return 0 if stdout.columns is undefined', () => {
    // @ts-expect-error TS2322: Type undefined is not assignable to type number
    stdout.columns = undefined;
    const result = getColumns();
    expect(result).toBe(0);
});
