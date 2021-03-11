const SinglyLinkedList = require('./singlyLinkedList');

let singlyLinkedList;
beforeEach(() => {
  singlyLinkedList = new SinglyLinkedList(5);
});

// isEmpty
describe('test singlyLinkedList functionalities', () => {
  test('test isEmpty function', () => {
    expect(singlyLinkedList.isEmpty()).toBe(true);
    singlyLinkedList.append(5);
    expect(singlyLinkedList.isEmpty()).toBe(false);
  });
});

// append
describe('test singlyLinkedList functionalities', () => {
  test('test append function', () => {
    singlyLinkedList.append(5);
    singlyLinkedList.append(1);
    singlyLinkedList.append(2);
    singlyLinkedList.append(1);
    singlyLinkedList.append(2);

    expect(singlyLinkedList.print()).toBe('51212');
  });
});

// prepend
describe('test singlyLinkedList functionalities', () => {
  test('test prepend function', () => {
    singlyLinkedList.append(1);
    singlyLinkedList.append(2);
    singlyLinkedList.append(1);
    singlyLinkedList.append(2);
    singlyLinkedList.prepend(5);

    expect(singlyLinkedList.print()).toBe('51212');
  });
});

// setHead
describe('test singlyLinkedList functionalities', () => {
  test('test setHead function', () => {
    singlyLinkedList.append(1);
    singlyLinkedList.append(2);
    singlyLinkedList.append(5);
    singlyLinkedList.append(1);
    singlyLinkedList.append(2);
    singlyLinkedList.append(5);
    singlyLinkedList.setHead(2);

    expect(singlyLinkedList.print()).toBe('5125');
  });
});

describe('test singlyLinkedList functionalities', () => {
  test('test setHead function', () => {
    singlyLinkedList.append(1);
    singlyLinkedList.append(2);
    singlyLinkedList.append(5);
    singlyLinkedList.append(1);
    singlyLinkedList.append(2);
    singlyLinkedList.append(5);
    singlyLinkedList.setHead(0);

    expect(singlyLinkedList.print()).toBe('125125');
  });
});

describe('test singlyLinkedList functionalities', () => {
  test('test setHead function', () => {
    singlyLinkedList.append(1);
    singlyLinkedList.append(2);
    singlyLinkedList.append(5);
    singlyLinkedList.append(1);
    singlyLinkedList.append(2);
    singlyLinkedList.append(5);
    singlyLinkedList.setHead(5);

    expect(singlyLinkedList.print()).toBe('5');
  });
});

//access
describe('test singlyLinkedList functionalities', () => {
  test('test access function', () => {
    singlyLinkedList.append(1);
    singlyLinkedList.append(2);
    singlyLinkedList.append(5);
    singlyLinkedList.append(1);
    singlyLinkedList.append(2);
    singlyLinkedList.append(5);

    expect(singlyLinkedList.access(2)).toBe(5);
    expect(singlyLinkedList.access(0)).toBe(1);
    expect(singlyLinkedList.access(5)).toBe(5);
  });
});

//insert
describe('test singlyLinkedList functionalities', () => {
  test('test insert function', () => {
    singlyLinkedList.append(1);
    singlyLinkedList.append(2);
    singlyLinkedList.append(5);
    singlyLinkedList.append(1);
    singlyLinkedList.append(2);
    singlyLinkedList.append(5);
    singlyLinkedList.insert(2, 9);

    expect(singlyLinkedList.print()).toBe('1295125');
  });
});

describe('test singlyLinkedList functionalities', () => {
  test('test insert function', () => {
    singlyLinkedList.append(1);
    singlyLinkedList.append(2);
    singlyLinkedList.append(5);
    singlyLinkedList.append(1);
    singlyLinkedList.append(2);
    singlyLinkedList.append(5);
    singlyLinkedList.insert(0, 9);

    expect(singlyLinkedList.print()).toBe('9125125');
  });
});

describe('test singlyLinkedList functionalities', () => {
  test('test insert function', () => {
    singlyLinkedList.append(1);
    singlyLinkedList.append(2);
    singlyLinkedList.append(5);
    singlyLinkedList.append(1);
    singlyLinkedList.append(2);
    singlyLinkedList.append(5);
    singlyLinkedList.insert(5, 9);

    expect(singlyLinkedList.print()).toBe('1251295');
  });
});

// remove

describe('test singlyLinkedList functionalities', () => {
  test('test remove function', () => {
    singlyLinkedList.append(1);
    singlyLinkedList.append(2);
    singlyLinkedList.append(5);
    singlyLinkedList.append(1);
    singlyLinkedList.append(2);
    singlyLinkedList.append(5);
    singlyLinkedList.remove(0);

    expect(singlyLinkedList.print()).toBe('25125');
  });
});

describe('test singlyLinkedList functionalities', () => {
  test('test remove function', () => {
    singlyLinkedList.append(1);
    singlyLinkedList.append(2);
    singlyLinkedList.append(5);
    singlyLinkedList.append(1);
    singlyLinkedList.append(2);
    singlyLinkedList.append(5);
    singlyLinkedList.remove(3);

    expect(singlyLinkedList.print()).toBe('12525');
  });
});

describe('test singlyLinkedList functionalities', () => {
  test('test remove function', () => {
    singlyLinkedList.append(1);
    singlyLinkedList.append(2);
    singlyLinkedList.append(5);
    singlyLinkedList.append(1);
    singlyLinkedList.append(5);
    singlyLinkedList.append(1);

    singlyLinkedList.remove(5);

    expect(singlyLinkedList.print()).toBe('12515');
  });
});
