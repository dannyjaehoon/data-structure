const ArrayList = require('./arrayList');

let arrayList;
beforeEach(() => {
  arrayList = new ArrayList(5);
});

// isEmpty
describe('test arraylist functionalities', () => {
  test('test isEmpty function', () => {
    expect(arrayList.isEmpty()).toBe(true);
  });
});

describe('test arraylist functionalities', () => {
  test('test isEmpty function', () => {
    arrayList.prepend(2);

    expect(arrayList.isEmpty()).toBe(false);
  });
});

// prepend
describe('test arraylist functionalities', () => {
  test('test prepend function', () => {
    arrayList.prepend(4);
    arrayList.prepend(2);
    arrayList.prepend(1);
    arrayList.prepend(2);
    arrayList.prepend(1);

    expect(arrayList.print()).toBe('4-2-1-2-1');
  });
});

describe('test arraylist functionalities', () => {
  test('test prepend function', () => {
    arrayList.prepend('dds');
    arrayList.prepend(2);
    arrayList.prepend(1);
    arrayList.prepend(2);
    arrayList.prepend(1);

    expect(arrayList.print()).toBe('0-2-1-2-1');
  });
});

//질문 : 문자열을 넣었을때 0 이 나오는이유?

// test increaseCapacity function
describe('test arraylist functionalities', () => {
  test('test increaseCapacity function', () => {
    arrayList.prepend(1);
    arrayList.prepend(2);
    arrayList.prepend(1);
    arrayList.prepend(2);
    arrayList.prepend(1);
    arrayList.prepend(2);
    arrayList.prepend(1);

    expect(arrayList.print()).toBe('1-2-1-2-1-2-1');
  });
});

// test append function
describe('test arraylist functionalities', () => {
  test('test append function', () => {
    arrayList.append(5);
    arrayList.append(1);
    arrayList.append(2);

    expect(arrayList.print()).toBe('2-1-5');
  });
});

// test append function
describe('test arraylist functionalities', () => {
  test('test append function', () => {
    arrayList.append(5);
    arrayList.append(1);
    arrayList.append(2);
    arrayList.append(5);
    arrayList.append(1);
    arrayList.append(2);

    expect(arrayList.print()).toBe('2-1-5-2-1-5');
  });
});

// test append function
describe('test arraylist functionalities', () => {
  test('test append function', () => {
    arrayList.append(5);
    arrayList.append(1);
    arrayList.append(2);
    arrayList.append(5);
    arrayList.append(1);
    arrayList.append(2);

    expect(arrayList.print()).toBe('2-1-5-2-1-5');
  });
});

// test setHead function
describe('test arraylist functionalities', () => {
  test('test setHead function', () => {
    arrayList.append(5);
    arrayList.append(1);
    arrayList.append(2);
    arrayList.append(5);
    arrayList.append(1);
    arrayList.append(2);
    arrayList.setHead(2);

    expect(arrayList.print()).toBe('5-2-1-5');
  });
});

// test access function
describe('test arraylist functionalities', () => {
  test('test access function', () => {
    arrayList.prepend(1);
    arrayList.prepend(2);
    arrayList.prepend(3);
    arrayList.prepend(4);
    arrayList.prepend(5);
    arrayList.prepend(6);

    expect(arrayList.access(3)).toBe(4);
  });
});

// test insert function
describe('test arraylist functionalities', () => {
  test('test insert function', () => {
    arrayList.prepend(1);
    arrayList.prepend(2);
    arrayList.prepend(3);
    arrayList.prepend(4);
    arrayList.prepend(5);
    arrayList.prepend(6);
    arrayList.insert(2, 7);

    expect(arrayList.print()).toBe('1-2-7-3-4-5-6');
  });
});

describe('test arraylist functionalities', () => {
  test('test insert function', () => {
    arrayList.prepend(1);
    arrayList.prepend(2);
    arrayList.prepend(3);
    arrayList.prepend(4);
    arrayList.prepend(5);
    arrayList.prepend(6);
    arrayList.insert(0, 1);

    expect(arrayList.print()).toBe('1-1-2-3-4-5-6');
  });
});

describe('test arraylist functionalities', () => {
  test('test insert function', () => {
    arrayList.prepend(1);
    arrayList.prepend(2);
    arrayList.prepend(3);
    arrayList.prepend(4);
    arrayList.prepend(5);
    arrayList.prepend(6);
    arrayList.insert(6, 1);

    expect(arrayList.print()).toBe('1-2-3-4-5-6-1');
  });
});

// test remove function
describe('test arraylist functionalities', () => {
  test('test remove function', () => {
    arrayList.prepend(1);
    arrayList.prepend(2);
    arrayList.prepend(3);
    arrayList.prepend(4);
    arrayList.prepend(5);
    arrayList.prepend(6);
    arrayList.remove(2);

    expect(arrayList.print()).toBe('1-2-4-5-6');
  });
});
