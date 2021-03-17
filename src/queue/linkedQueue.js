class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class LinkedQueue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  put(value) {
    // tail에서 넣는다
    if (this.head === null) {
      this.head = new Node(value, null, null);
      this.tail = this.head;
      return;
    }
    this.tail.next = new Node(value, this.tail, null);
    this.tail = this.tail.next;
  }

  get() {
    // head에서 뺀다
    if (this.head === null) return undefined;
    if (this.head.next === null) {
      const value = this.head.value;
      this.head = null;
      this.tail = null;
      return value;
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.head.prev = null;
    return value;
  }

  peek() {
    if (this.tail === null) return undefined;
    return this.tail.value;
  }

  print() {
    let sum = '';
    if (this.head === null) return;
    while (this.head.next !== null) {
      sum += this.head.value;
      this.head = this.head.next;
    }
    sum += this.head.value;
    return sum;
  }
}

module.exports = LinkedQueue;
