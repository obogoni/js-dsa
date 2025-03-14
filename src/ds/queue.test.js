import { Queue } from './queue';

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test('should be empty initially', () => {
    expect(queue.isEmpty()).toBe(true);
  });

  test('should push elements to the queue', () => {
    queue.push(1);
    expect(queue.isEmpty()).toBe(false);
  });

  test('should pop elements from the queue', () => {
    queue.push(1);
    queue.push(2);
    expect(queue.pop()).toBe(1);
    expect(queue.pop()).toBe(2);
    expect(queue.pop()).toBeNull();
  });

  test('should maintain FIFO order', () => {
    queue.push(1);
    queue.push(2);
    queue.push(3);
    expect(queue.pop()).toBe(1);
    expect(queue.pop()).toBe(2);
    expect(queue.pop()).toBe(3);
  });

  test('should print the queue', () => {
    console.log = jest.fn();
    queue.push(1);
    queue.push(2);
    queue.print();
    expect(console.log).toHaveBeenCalledWith('queue: 1,2');
  });
});

