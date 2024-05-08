import { stdout } from 'node:process';
import { expect, test } from 'vitest';
import getColumns from '../../src/utils/get-columns';

test('getColumns - should return the number of columns', () => {
    stdout.columns = 80;
    const result = getColumns();
    expect(result).toBe(80);
});

test('getColumns - should return 0 if stdout.columns is undefined', () => {
    stdout.columns = undefined;
    const result = getColumns();
    expect(result).toBe(0);
});
