//The Stack fallows the LIFO principle, Last In, First Out, principle
//Also, as it turns out, you can define classes in Javascript

class Stack {

  push(e) {

    console.log(`pushed: ${e}`);

    if (!this.head) {

      this.head = { value: e };
      return;
    }

    this.head =
    {
      next: this.head,
      value: e
    };
  }

  peek() {
    if (this.isEmpty()) return null;

    console.log(`peeked: ${this.head.value}`);

    return this.head.value;

  }

  pop() {
    if (this.isEmpty()) return null;

    console.log(`poped: ${this.head.value}`);

    this.head = this.head.next;
  }

  isEmpty() {

    let isEmpty = !this.head;

    console.log(`is empty: ${isEmpty}`);

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

var myStack = new Stack();

myStack.push(1);
myStack.push(54);
myStack.pop();
myStack.pop();
myStack.pop();
myStack.push(23);
myStack.push(29)
myStack.push(3);
myStack.peek();
myStack.pop();
myStack.push(88);
myStack.peek();
myStack.print();

