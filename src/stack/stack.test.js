const Stack = require('./stack');

let stack;
beforeEach(() => {
  stack = new Stack(5);
});

// isEmpty
describe('test stack functionalities', () => {
  test('test isEmpty function', () => {
    expect(stack.isEmpty()).toBe(true);
  });
});

// push
describe('test stack functionalities', () => {
  test('test push function', () => {
    stack.push(3);
    stack.push(1);
    stack.push(2);
    stack.push(4);
    expect(stack.print()).toBe('3124');
  });
});

// push
describe('test stack functionalities', () => {
  test('test push function', () => {
    stack.push(3);
    stack.push(1);
    stack.push(2);
    stack.push(4);
    stack.push(6);
    expect(stack.push(5)).toBe(false);
  });
});

// pop
describe('test stack functionalities', () => {
  test('test pop function', () => {
    stack.push(3);
    stack.push(1);
    stack.push(2);
    stack.push(4);

    stack.pop();
    expect(stack.print()).toBe('312');
  });
});

describe('test stack functionalities', () => {
  test('test pop function', () => {
    stack.push(3);
    stack.push(1);
    stack.push(2);
    stack.push(4);

    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();

    expect(stack.pop()).toBe('stack underflow occurred');
  });
});

//peak
describe('test stack functionalities', () => {
  test('test peak function', () => {
    stack.push(3);
    stack.push(1);
    stack.push(2);
    stack.push(4);

    expect(stack.peek()).toBe(4);
  });
});

describe('test stack functionalities', () => {
  test('test peak function', () => {
    expect(stack.peek()).toBe('data does not exist');
  });
});
