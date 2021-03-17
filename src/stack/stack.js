class Stack {
  constructor(capacity) {
    this.capacity = capacity;
    this.top = 0;
    this.array = new Array(capacity);
  }

  push(value) {
    if (this.top === this.capacity) return false;
    this.array[this.top] = value;
    this.top += 1;
    return true;
  }

  pop() {
    if (this.isEmpty()) return 'stack underflow occurred';
    this.top -= 1;
    return this.array[this.top];
  }

  peek() {
    if (this.isEmpty()) return 'data does not exist';
    return this.array[this.top - 1];
  }

  isEmpty() {
    return this.top === 0;
  }

  print() {
    let sum = '';
    for (let i = 0; i < this.top; i++) {
      sum += this.array[i];
    }
    return sum;
  }
}

module.exports = Stack;
