/*
The LinkedList
Also, as it turns out:

1. Performing string concatenation with '+=' is way faster in Javascript
2. ESModules are the future of module management in Node. Although it was a pain to set up Jest.
3. Using const for variables that won't be reassigned is the best practice.

*/

export class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export class LinkedList {

  insertHead(data) {

    if (!this.head) {

      this.head = new Node(data);
      this.tail = this.head;

      return;
    }

    const newHead = new Node(data);

    newHead.next = this.head;

    this.head = newHead;
  }

  insertTail(data) {

    if (!this.head) {
      this.insertHead(data);
      return;
    }

    const newTail = new Node(data);

    this.tail.next = newTail;
    this.tail = newTail;
  }

  get(i) {
    let current = this.head;
    let currentIndex = 0;

    while (currentIndex < i && current) {
      currentIndex++;
      current = current.next;
    }

    if (currentIndex == i) {
      return current;
    }
    else {
      return null;
    }
  }

  getValues() {

    const values = [];

    let current = this.head;

    while (current) {
      values.push(current.data);

      current = current.next;
    }

    return values;
  }

  print() {

    const values = this.getValues();

    console.log(values.join(','));
  }
}
