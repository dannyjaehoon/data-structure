class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // o(1)
  isEmpty() {
    return this.head === null ? true : false;
  }
  // o(1)
  prepend(value) {
    if (this.isEmpty()) {
      this.head = new Node(value, null);
      this.size += 1;
      return;
    }
    let current = this.head;
    let newNode = new Node(value, null);

    newNode.next = current;
    this.head = newNode;
    this.size += 1;
  }

  // o(n)
  append(value) {
    if (this.isEmpty()) {
      this.head = new Node(value, null);
      this.size += 1;
      return;
    }

    let current = this.head;

    while (current.next !== null) {
      current = current.next;
    }
    current.next = new Node(value, null);
    this.size += 1;
  }

  // o(n)
  setHead(index) {
    if (index > this.size) return;

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    this.head = current;
    this.size -= index;
  }
  // o(n)
  access(index) {
    if (index > this.size) return;

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.value;
  }
  // o(n)
  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return;
    }
    if (index === this.size) {
      this.append(value);
      return;
    }

    let current = this.head;
    let newNode = new Node(value, null);
    let prev;

    for (let i = 0; i < index; i++) {
      prev = current;
      current = current.next;
    }
    prev.next = newNode;
    newNode.next = current;
    this.size += 1;
  }
  // o(n)
  remove(index) {
    if (index === 0) {
      let current = this.head;
      this.head = current.next;
      return;
    }

    let current = this.head;
    let prev;

    for (let i = 0; i < index; i++) {
      prev = current;
      current = current.next;
    }
    prev.next = current.next;
    this.size -= 1;
  }

  print() {
    let result = '';
    let current = this.head;

    while (current.next !== null) {
      result += current.value;
      current = current.next;
    }
    result += current.value;
    return result;
  }
}

module.exports = SinglyLinkedList;
