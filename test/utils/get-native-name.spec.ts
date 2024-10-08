import { expect, test } from 'vitest';
import getNativeName from '../../src/utils/get-native-name';

test('getNativeName - should return empty string when code is undefined', () => {
    const result = getNativeName();
    expect(result).toBe('');
});

test('getNativeName - should return empty string when code is invalid', () => {
    const result = getNativeName('auto');
    expect(result).toBe('');
});

test('getNativeName - should return the native name when code is provided', () => {
    const result = getNativeName('zh-CN');
    expect(result).toBe('简体中文');
});