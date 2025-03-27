import { find } from './binary-search.js';

describe('Binary Search', () => {
  test('should return the correct index when the element is present', () => {
    const haystack = [1, 2, 3, 4, 5];
    const needle = 3;
    const result = find(haystack, needle);
    expect(result).toBe(2);
  });

  test('should return -1 when the element is not present', () => {
    const haystack = [1, 2, 3, 4, 5];
    const needle = 6;
    const result = find(haystack, needle);
    expect(result).toBe(-1);
  });

  test('should return -1 for an empty array', () => {
    const haystack = [];
    const needle = 1;
    const result = find(haystack, needle);
    expect(result).toBe(-1);
  });

  test('should return the correct index for the first element', () => {
    const haystack = [1, 2, 3, 4, 5];
    const needle = 1;
    const result = find(haystack, needle);
    expect(result).toBe(0);
  });

  test('should return the correct index for the last element', () => {
    const haystack = [1, 2, 3, 4, 5];
    const needle = 5;
    const result = find(haystack, needle);
    expect(result).toBe(4);
  });
});

