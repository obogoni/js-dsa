//The Queue follows the FIFO, First In First Out, principle.
export class Queue {

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

  pop() {

    if (this.isEmpty()) return null;

    let out = this.head.value;

    this.head = this.head.next;

    return out;
  }

  isEmpty() {

    let isEmpty = !this.head;

    return isEmpty;
  }

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

var queue = new Queue();

queue.push(1);
queue.push(18);
queue.push(5);
queue.pop();
queue.pop();
queue.push(22);
queue.pop();
queue.print();

