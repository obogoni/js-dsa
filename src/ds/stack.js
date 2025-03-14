//The Stack fallows the LIFO principle, Last In, First Out, principle
//Also, as it turns out, you can define classes in Javascript

class Node {
  constructor(data) {
    this.value = data;
    this.next = null;
  }
}

export class Stack {

  push(e) {

    if (!this.head) {

      this.head = new Node(e);
      return;
    }

    const newHead = new Node(e);

    newHead.next = this.head;

    this.head = newHead;
  }

  peek() {
    return this.head?.value;
  }

  pop() {

    if (!this.head) return null;

    const poped = this.head;

    this.head = poped.next;

    return poped.value;
  }

  isEmpty() {

    let isEmpty = !this.head;

    return isEmpty;
  }

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
