class ArrayList {
  constructor(capacity) {
    this.capacity = capacity;
    this.array = new Int32Array(capacity);
    this.length = 0;
  }

  deepCopy(curArray, newArray) {
    for (let i = 0; i < curArray.length; i++) {
      newArray[i] = curArray[i];
    }
    this.array = newArray;
  }

  // increase the capacity (currentArray's size * 2)
  increaseCapacity() {
    this.capacity = this.capacity * 2;
    const newArray = new Int32Array(this.capacity);
    this.deepCopy(this.array, newArray);
  }

  isArrayFull() {
    return this.capacity - 1 === this.length ? true : false;
  }

  // o(1)
  isEmpty() {
    return this.length === 0 ? true : false;
  }

  // o(n)
  prepend(value) {
    if (this.isArrayFull()) {
      this.increaseCapacity();
    }
    this.array[this.length] = value;
    this.length += 1;
  }

  // o(n)
  append(value) {
    if (this.isArrayFull()) {
      this.increaseCapacity();
    }

    const newArray = new Int32Array(this.capacity);
    newArray[0] = value;
    for (let i = 0; i < this.length; i++) {
      newArray[i + 1] = this.array[i];
    }

    this.array = newArray;
    this.length += 1;
  }

  // o(1)
  setHead(index) {
    const newArray = new Int32Array(this.capacity);

    for (let i = 0; i < this.length; i++) {
      newArray[i] = this.array[index + i];
    }

    this.array = newArray;
    this.length = this.length - index;
  }

  // o(1)
  access(index) {
    return this.array[index];
  }

  // o(n)
  insert(index, value) {
    if (this.isArrayFull()) {
      this.increaseCapacity();
    }
    const newArray = new Int32Array(this.capacity);
    let supNum = 0;

    for (let i = 0; i < this.length + 1; i++) {
      if (i === index) {
        newArray[index] = value;
        supNum += 1;
        continue;
      }
      newArray[i] = this.array[i - supNum];
    }
    this.array = newArray;
    this.length += 1;
  }

  // o(n)
  remove(index) {
    const newArray = new Int32Array(this.capacity);
    let supNum = 0;

    for (let i = 0; i < this.length + 1; i++) {
      if (i === index) {
        supNum += 1;
        continue;
      }
      newArray[i - supNum] = this.array[i];
    }

    this.array = newArray;
    this.length -= 1;
  }

  print() {
    return [...this.array].slice(0, this.length).join('-');
  }
}
module.exports = ArrayList;
