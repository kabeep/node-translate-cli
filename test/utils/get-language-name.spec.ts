import { expect, test } from 'vitest';
import getLanguageName from '../../src/utils/get-language-name.js';

test('getLanguageName - should return undefined when both from and detectFrom are undefined', () => {
    const result = getLanguageName();
    expect(result).toBe(undefined);
});

test('getLanguageName - should return the language name when from is provided', () => {
    const result = getLanguageName('en', 'English');
    expect(result).toBe('English');
});

test('getLanguageName - should return the detected language name when from is not provided', () => {
    const result = getLanguageName(undefined, 'en');
    expect(result).toBe('English');
});

test('getLanguageName - should return the detected language name when from is "auto"', () => {
    const result = getLanguageName('auto', 'en');
    expect(result).toBe('English');
});

test('getLanguageName - should return the detected language name when from is not valid', () => {
    const result = getLanguageName('auto', 'Unknown');
    expect(result).toBe('Unknown');
});
