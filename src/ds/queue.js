//The Queue follows the FIFO, First In First Out, principle.
/**
 * Represents a queue data structure following the FIFO (First In, First Out) principle.
 */
export class Queue {

  /**
   * Adds an element to the end of the queue.
   * Time complexity: O(n), where n is the number of elements in the queue.
   * @param {*} e - The element to add to the queue.
   */
  push(e) {

    if (!this.head) {
      this.head = { value: e };

      return;
    }

    let lastInLine = this.head;

    while (lastInLine.next) {
      lastInLine = lastInLine.next;
    }

    lastInLine.next = {
      value: e
    };
  }

  /**
   * Removes and returns the element at the front of the queue.
   * Time complexity: O(1)
   * @returns {*} The removed element from the front of the queue, or null if the queue is empty.
   */
  pop() {

    if (this.isEmpty()) return null;

    let out = this.head.value;

    this.head = this.head.next;

    return out;
  }

  /**
   * Checks if the queue is empty.
   * Time complexity: O(1)
   * @returns {boolean} True if the queue is empty, false otherwise.
   */
  isEmpty() {

    let isEmpty = !this.head;

    return isEmpty;
  }

  /**
   * Prints the elements of the queue.
   * Time complexity: O(n), where n is the number of elements in the queue.
   */
  print() {
    if (this.isEmpty()) return;

    let queue = [];

    let first = this.head;

    while (first) {
      queue.push(first.value);

      first = first.next;
    }

    console.log(`queue: ${queue}`);
  }
}
