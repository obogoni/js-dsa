import { DoublyLinkedList } from './doubly-linked-list';

describe('DoublyLinkedList', () => {
    let list;

    beforeEach(() => {
        list = new DoublyLinkedList();
    });

    test('should insert nodes at the head', () => {
        list.insertHead(1);
        list.insertHead(2);
        list.insertHead(3);
        expect(list.transverse()).toEqual([3, 2, 1]);
    });

    test('should insert nodes at the tail', () => {
        list.insertTail(1);
        list.insertTail(2);
        list.insertTail(3);
        expect(list.transverse()).toEqual([1, 2, 3]);
    });

    test('should get node by index', () => {
        list.insertTail(1);
        list.insertTail(2);
        list.insertTail(3);
        expect(list.get(1).value).toBe(2);
        expect(list.get(3)).toBeNull();
    });

    test('should remove node by index', () => {
        list.insertTail(1);
        list.insertTail(2);
        list.insertTail(3);
        list.remove(1);
        expect(list.transverse()).toEqual([1, 3]);
    });

    test('should remove head node', () => {
        list.insertTail(1);
        list.insertTail(2);
        list.removeHead();
        expect(list.transverse()).toEqual([2]);
    });

    test('should remove tail node', () => {
        list.insertTail(1);
        list.insertTail(2);
        list.removeTail();
        expect(list.transverse()).toEqual([1]);
    });

    test('should transverse backwards', () => {
        list.insertTail(1);
        list.insertTail(2);
        list.insertTail(3);
        expect(list.transverseBackwards()).toEqual([3, 2, 1]);
    });

    test('should handle inserting into an empty list', () => {
        expect(list.transverse()).toEqual([]);
        list.insertHead(1);
        expect(list.transverse()).toEqual([1]);
        list = new DoublyLinkedList();
        list.insertTail(1);
        expect(list.transverse()).toEqual([1]);
    });

    test('should handle removing from an empty list', () => {
        expect(list.removeHead()).toBe(false);
        expect(list.removeTail()).toBe(false);
        expect(list.remove(0)).toBe(false);
    });

    test('should handle inserting and removing a single element', () => {
        list.insertHead(1);
        expect(list.transverse()).toEqual([1]);
        list.removeHead();
        expect(list.transverse()).toEqual([]);
        list.insertTail(1);
        expect(list.transverse()).toEqual([1]);
        list.removeTail();
        expect(list.transverse()).toEqual([]);
    });

    test('should handle invalid indices for get and remove methods', () => {
        expect(list.get(-1)).toBeNull();
        expect(list.get(0)).toBeNull();
        expect(list.remove(-1)).toBe(false);
        expect(list.remove(0)).toBe(false);
    });
});
