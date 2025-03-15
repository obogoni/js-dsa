import { LinkedList } from './linked-list.js';

describe('LinkedList', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  test('should insert nodes at the head', () => {
    list.insertHead(1);
    list.insertHead(2);
    expect(list.getValues()).toEqual([2, 1]);
  });

  test('should insert nodes at the tail', () => {
    list.insertTail(1);
    list.insertTail(2);
    expect(list.getValues()).toEqual([1, 2]);
  });

  test('should get the correct node', () => {
    list.insertTail(1);
    list.insertTail(2);
    list.insertTail(3);
    expect(list.get(1).data).toBe(2);
    expect(list.get(2).data).toBe(3);
    expect(list.get(3)).toBeNull();
  });

  test('should return correct values from getValues', () => {
    list.insertTail(1);
    list.insertTail(2);
    list.insertTail(3);
    expect(list.getValues()).toEqual([1, 2, 3]);
  });

  test('should print the correct string', () => {
    console.log = jest.fn();
    list.insertTail(1);
    list.insertTail(2);
    list.insertTail(3);
    list.print();
    expect(console.log).toHaveBeenCalledWith('1,2,3');
  });

  test('should remove the node at the specified index and return true', () => {
    list.insertTail(1);
    list.insertTail(2);
    list.insertTail(3);
    const result = list.remove(1);
    expect(result).toBe(true);
    expect(list.getValues()).toEqual([1, 3]);
  });

  test('should return false if no node is found at the specified index', () => {
    list.insertTail(1);
    list.insertTail(2);
    list.insertTail(3);
    const result = list.remove(3); // Index 3 does not exist
    expect(result).toBe(false);
    expect(list.getValues()).toEqual([1, 2, 3]);
  });

  test('should remove the head node and update the head pointer', () => {
    list.insertTail(1);
    list.insertTail(2);
    list.insertTail(3);
    const result = list.remove(0);
    expect(result).toBe(true);
    expect(list.getValues()).toEqual([2, 3]);
  });
});

