/** 
The Doubly Linked List
Also, as it turns out: there's a pattern for documenting classes and methods in Javascript. It's called JSDoc.
 */

/**
 * Represents a node in a doubly linked list.
 */
class Node {
  /**
   * Creates a new node.
   * @param {*} data - The value to store in the node.
   */
  constructor(data) {
    this.value = data;
    this.next = null;
    this.prev = null;
  }
}

/**
 * Represents a doubly linked list.
 */
export class DoublyLinkedList {

  /**
   * Creates an empty doubly linked list.
   */
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * Inserts a new node at the head of the list.
   * Time complexity: O(1)
   * @param {*} data - The value to insert.
   */
  insertHead(data) {
    if (!this.head) {
      this.head = new Node(data);
      this.tail = this.head;
      return;
    }

    this.head.prev = new Node(data);
    this.head.prev.next = this.head;
    this.head = this.head.prev;
  }

  /**
   * Inserts a new node at the tail of the list.
   * Time complexity: O(1)
   * @param {*} data - The value to insert.
   */
  insertTail(data) {
    if (!this.head) {
      this.insertHead(data);
      return;
    }

    this.tail.next = new Node(data);
    this.tail.next.prev = this.tail;
    this.tail = this.tail.next;
  }

  /**
   * Retrieves the node at the specified index.
   * Time complexity: O(n)
   * @param {number} i - The index of the node to retrieve.
   * @returns {Node|null} The node at the specified index, or null if not found.
   */
  get(i) {
    let curr = this.head;
    let index = 0;

    while (index < i && curr) {
      index++;
      curr = curr.next;
    }

    return index == i ? curr : null;
  }

  /**
   * Removes the node at the specified index.
   * Time complexity: O(n)
   * @param {number} i - The index of the node to remove.
   * @returns {boolean} True if the node was removed, false otherwise.
   */
  remove(i) {
    if (i == 0) return this.removeHead();

    let curr = this.head;
    let index = 0;

    while (index < i && curr) {
      index++;
      curr = curr.next;
    }
    if (!curr) return false;
    if (curr === this.tail) return this.removeTail();

    curr.prev.next = curr.next;
    curr.prev.next.prev = curr.prev;

    return true;
  }

  /**
   * Removes the head node of the list.
   * Time complexity: O(1)
   * @returns {boolean} True if the head was removed, false otherwise.
   */
  removeHead() {
    if (!this.head) return false;

    if (this.head.next) {
      this.head = this.head.next;
      this.head.prev = null;
    } else {
      this.head = this.tail = null;
    }

    return true;
  }

  /**
   * Removes the tail node of the list.
   * Time complexity: O(1)
   * @returns {boolean} True if the tail was removed, false otherwise.
   */
  removeTail() {
    if (!this.head) return false;

    if (this.tail.prev) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      this.head = this.tail = null;
    }

    return true;
  }

  /**
   * Transverses the list from head to tail.
   * Time complexity: O(n)
   * @returns {Array} An array of node values.
   */
  transverse() {
    const arr = [];
    let curr = this.head;

    while (curr) {
      arr.push(curr.value);
      curr = curr.next;
    }

    return arr;
  }

  /**
   * Transverses the list from tail to head.
   * Time complexity: O(n)
   * @returns {Array} An array of node values.
   */
  transverseBackwards() {
    const arr = [];
    let curr = this.tail;

    while (curr) {
      arr.push(curr.value);
      curr = curr.prev;
    }

    return arr;
  }
}

