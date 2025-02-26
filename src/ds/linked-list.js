//The LinkedList
//Also, as it turns out, performing string concatenation with '+=' is way faster in Javascript

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {

  insert(data) {
    if (!this.head) {
      this.head = new Node(data);

      return;
    }

    let newHead = new Node(data);

    newHead.next = this.head;

    this.head = newHead;
  }

  insertAtEnd(data) {

    if (!this.head) {
      this.head = new Node(data);

      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = new Node(data);
  }

  print() {

    let strList = "[";

    let current = this.head;

    while (current) {
      strList += current.data;

      if (current.next) {
        strList += ",";
      }

      current = current.next;
    }

    strList += "]";

    console.log(strList);
  }
}

var list = new LinkedList();

list.insertAtEnd(2);
list.insertAtEnd(4);
list.insertAtEnd(6);
list.insertAtEnd(20);

list.insert(10);
list.insert(22);

list.print();
