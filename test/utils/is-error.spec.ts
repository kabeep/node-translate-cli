import { expect, test } from 'vitest';
import isError from '../../src/utils/is-error.js';

test('isError - should return true for an Error object', () => {
    const error = new Error('Test error');
    const result = isError(error);
    expect(result).toBe(true);
});

test('isError - should return false for other types of values', () => {
    expect(isError('')).toBe(false);
    expect(isError(123)).toBe(false);
    expect(isError({})).toBe(false);
    expect(isError([])).toBe(false);
    expect(isError(null)).toBe(false);
    expect(isError(undefined)).toBe(false);
});
