import { timeCheck } from './crystal-balls';

describe('timeCheck', () => {
  test('should return the first breaking point', () => {
    const breaks = [false, false, false, true, true];
    expect(timeCheck(breaks)).toBe(3);
  });

  test('should return -1 if no breaking point is found', () => {
    const breaks = [false, false, false, false, false];
    expect(timeCheck(breaks)).toBe(-1);
  });

  test('should handle the case where the first floor is the breaking point', () => {
    const breaks = [true, true, true, true, true];
    expect(timeCheck(breaks)).toBe(0);
  });

  test('should handle the case where the last floor is the breaking point', () => {
    const breaks = [false, false, false, false, true];
    expect(timeCheck(breaks)).toBe(4);
  });

  test('should return -1 for an empty array', () => {
    const breaks = [];
    expect(timeCheck(breaks)).toBe(-1);
  });

  test('should handle a single element array with true', () => {
    const breaks = [true];
    expect(timeCheck(breaks)).toBe(0);
  });

  test('should handle a single element array with false', () => {
    const breaks = [false];
    expect(timeCheck(breaks)).toBe(-1);
  });

  test('should handle an array where all elements are true', () => {
    const breaks = [true, true, true, true, true];
    expect(timeCheck(breaks)).toBe(0);
  });
});

