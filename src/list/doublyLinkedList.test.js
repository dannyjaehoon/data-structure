const DoublyLinkedList = require('./doublyLinkedList');

let doublyLinkedList;
beforeEach(() => {
  doublyLinkedList = new DoublyLinkedList(5);
});

// isEmpty
describe('test doublyLinkedList functionalities', () => {
  test('test isEmpty function', () => {
    expect(doublyLinkedList.isEmpty()).toBe(true);
    doublyLinkedList.append(2);
    expect(doublyLinkedList.isEmpty()).toBe(false);
  });
});

// append
describe('test doublyLinkedList functionalities', () => {
  test('test append function', () => {
    doublyLinkedList.append(2);
    doublyLinkedList.append(9);
    doublyLinkedList.append(8);
    doublyLinkedList.append(9);
    doublyLinkedList.append(8);

    expect(doublyLinkedList.print()).toBe('29898');
  });
});

// prepend
describe('test doublyLinkedList functionalities', () => {
  test('test prepend function', () => {
    doublyLinkedList.append(2);
    doublyLinkedList.append(9);
    doublyLinkedList.append(3);
    doublyLinkedList.append(1);
    doublyLinkedList.append(2);
    doublyLinkedList.append(9);
    doublyLinkedList.append(3);
    doublyLinkedList.append(1);
    doublyLinkedList.prepend(1);

    expect(doublyLinkedList.print()).toBe('129312931');
  });
});

describe('test doublyLinkedList functionalities', () => {
  test('test prepend function', () => {
    doublyLinkedList.prepend(1);
    doublyLinkedList.prepend(2);
    doublyLinkedList.prepend(3);
    doublyLinkedList.prepend(4);

    expect(doublyLinkedList.print()).toBe('4321');
  });
});

// setHead
describe('test doublyLinkedList functionalities', () => {
  test('test setHead function', () => {
    doublyLinkedList.prepend(1);
    doublyLinkedList.prepend(2);
    doublyLinkedList.prepend(3);
    doublyLinkedList.prepend(4);
    doublyLinkedList.prepend(1);
    doublyLinkedList.prepend(2);
    doublyLinkedList.prepend(3);
    doublyLinkedList.prepend(4);
    doublyLinkedList.setHead(2);

    expect(doublyLinkedList.print()).toBe('214321');
  });
});

describe('test doublyLinkedList functionalities', () => {
  test('test setHead function', () => {
    doublyLinkedList.prepend(1);
    doublyLinkedList.prepend(2);
    doublyLinkedList.prepend(3);
    doublyLinkedList.prepend(4);
    doublyLinkedList.setHead(3);

    expect(doublyLinkedList.print()).toBe('1');
  });
});

// access
describe('test doublyLinkedList functionalities', () => {
  test('test setHead function', () => {
    doublyLinkedList.prepend(1);
    doublyLinkedList.prepend(2);
    doublyLinkedList.prepend(3);
    doublyLinkedList.prepend(4);

    expect(doublyLinkedList.access(2)).toBe(2);
    expect(doublyLinkedList.access(0)).toBe(4);
    expect(doublyLinkedList.access(3)).toBe(1);
  });
});

// insert
describe('test doublyLinkedList functionalities', () => {
  test('test insert function', () => {
    doublyLinkedList.append(2);
    doublyLinkedList.append(9);
    doublyLinkedList.append(8);
    doublyLinkedList.append(9);
    doublyLinkedList.append(8);
    doublyLinkedList.insert(2, 1);
    doublyLinkedList.insert(0, 1);
    doublyLinkedList.insert(6, 1);

    expect(doublyLinkedList.printInv()).toBe('81981921');
  });
});

// remove
describe('test doublyLinkedList functionalities', () => {
  test('test remove function', () => {
    doublyLinkedList.append(2);
    doublyLinkedList.append(9);
    doublyLinkedList.append(8);
    doublyLinkedList.append(9);
    doublyLinkedList.append(8);
    doublyLinkedList.remove(2);

    expect(doublyLinkedList.print()).toBe('2998');
  });
});

// printInv;
describe('test doublyLinkedList functionalities', () => {
  test('test printInv function', () => {
    doublyLinkedList.prepend(1);
    doublyLinkedList.prepend(2);
    doublyLinkedList.prepend(3);
    doublyLinkedList.prepend(4);

    expect(doublyLinkedList.printInv()).toBe('1234');
  });
});

//printInv
describe('test doublyLinkedList functionalities', () => {
  test('test printInv function', () => {
    doublyLinkedList.append(2);
    doublyLinkedList.append(9);
    doublyLinkedList.append(8);
    doublyLinkedList.append(9);
    doublyLinkedList.append(8);

    expect(doublyLinkedList.printInv()).toBe('89892');
  });
});

describe('test doublyLinkedList functionalities', () => {
  test('test remove function', () => {
    doublyLinkedList.append(2);
    doublyLinkedList.append(9);
    doublyLinkedList.append(8);
    doublyLinkedList.append(9);
    doublyLinkedList.append(8);
    doublyLinkedList.remove(2);

    expect(doublyLinkedList.printInv()).toBe('8992');
  });
});
