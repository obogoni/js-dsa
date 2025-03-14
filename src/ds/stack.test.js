import { Stack } from './stack';

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test('should be empty initially', () => {
    expect(stack.isEmpty()).toBe(true);
  });

  test('should push elements to the stack', () => {
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
  });

  test('should pop elements from the stack', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBeNull();
  });

  test('should maintain LIFO order', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
  });

  test('should peek the top element', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
    stack.pop();
    expect(stack.peek()).toBe(1);
  });

  test('should print the stack', () => {
    console.log = jest.fn();
    stack.push(1);
    stack.push(2);
    stack.print();
    expect(console.log).toHaveBeenCalledWith('stack: 2,1');
  });
});

