class CircularQueue {
  constructor(capacity) {
    this.capacity = capacity;
    this.front = 0;
    this.rear = 0;
    this.isFull = false;
    this.array = new Array(capacity);
  }

  put(value) {
    // overflow
    if (this.isFull === true) {
      return false;
    }
    // 꽉찼는지 처음에 시작하던지 front랑 rear는 같다.
    this.array[this.rear++] = value;
    this.rear %= this.capacity;

    // overflow check
    if (this.front === this.rear) {
      this.isFull = true;
    }
    return true;
  }

  get() {
    // underflow
    if (this.front === this.rear && this.isFull === false) {
      return undefined;
    }

    const value = this.array[this.front++];
    this.front %= this.capacity;
    this.isFull = false;
    return value;
  }

  peek() {
    // underflow
    if (this.front === this.rear && this.isFull === false) {
      return undefined;
    }

    return this.array[this.front];
  }

  print() {}
}
