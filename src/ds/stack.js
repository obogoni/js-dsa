//The Stack fallows the LIFO principle, Last In, First Out, principle
//Also, as it turns out, you can define classes in Javascript

/**
 * Represents a node in a stack.
 */
class Node {
  /**
   * Creates a new node.
   * @param {*} data - The value to store in the node.
   */
  constructor(data) {
    this.value = data;
    this.next = null;
  }
}

/**
 * Represents a stack data structure following the LIFO principle.
 */
export class Stack {

  /**
   * Pushes an element onto the stack.
   * Time complexity: O(1)
   * @param {*} e - The element to push onto the stack.
   */
  push(e) {
    if (!this.head) {
      this.head = new Node(e);
      return;
    }

    const newHead = new Node(e);
    newHead.next = this.head;
    this.head = newHead;
  }

  /**
   * Returns the top element of the stack without removing it.
   * Time complexity: O(1)
   * @returns {*} The top element of the stack.
   */
  peek() {
    return this.head?.value;
  }

  /**
   * Removes and returns the top element of the stack.
   * Time complexity: O(1)
   * @returns {*} The removed top element of the stack, or null if the stack is empty.
   */
  pop() {
    if (!this.head) return null;

    const poped = this.head;
    this.head = poped.next;
    return poped.value;
  }

  /**
   * Checks if the stack is empty.
   * Time complexity: O(1)
   * @returns {boolean} True if the stack is empty, false otherwise.
   */
  isEmpty() {
    let isEmpty = !this.head;
    return isEmpty;
  }

  /**
   * Prints the elements of the stack.
   * Time complexity: O(n), where n is the number of elements in the stack.
   */
  print() {
    let stack = [];

    if (this.head) {
      stack.push(this.head.value);
      let current = this.head.next;

      while (current) {
        stack.push(current.value);
        current = current.next;
      }
    }

    console.log(`stack: ${stack}`);
  }
}

