class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.head === null ? true : false;
  }

  prepend(value) {
    if (this.head === null) {
      this.head = new Node(value, null, null);
      this.tail = this.head;
      this.size += 1;
      return;
    }
    let newNode = new Node(value, null, this.head);
    this.head.prev = newNode;
    this.head = newNode;
    this.size += 1;
  }

  append(value) {
    if (this.head === null) {
      this.head = new Node(value, null, null);
      this.tail = this.head;
      this.size += 1;
      return;
    }
    if (this.size === 1) {
      this.head.next = new Node(value, this.head, null);
      this.tail = this.head.next;
      this.size += 1;
      return;
    }
    let lastNode = this.tail;
    lastNode.next = new Node(value, lastNode, null);
    this.tail = lastNode.next;
    this.size += 1;
  }

  setHead(index) {
    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    current.prev = null;
    this.head = current;
    this.size -= index;
  }

  access(index) {
    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.value;
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      this.size += 1;
      return;
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    const newNode = new Node(value, current.prev, current);
    current.prev.next = newNode;
    current.prev = newNode;
    this.size += 1;
  }

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      this.head.prev = null;
      this.size -= 1;
      return;
    }
    // if index is same as the size(number of data)
    if (index + 1 === this.size) {
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.size -= 1;
      return;
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    current.next.prev = current.prev;
    current.prev.next = current.next;
    this.size -= 1;
  }

  print() {
    let result = '';
    let current = this.head;
    while (current.next !== null) {
      console.log(current);
      result += current.value;
      current = current.next;
    }
    console.log(current);
    result += current.value;
    return result;
  }

  printInv() {
    let result = '';
    let current = this.tail;

    while (current.prev !== null) {
      result += current.value;
      current = current.prev;
    }
    result += current.value;
    return result;
  }
}

module.exports = DoublyLinkedList;
