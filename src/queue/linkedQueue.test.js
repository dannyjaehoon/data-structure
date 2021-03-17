const LinkedQueue = require('./linkedQueue');

let linkedQueue;
beforeEach(() => {
  linkedQueue = new LinkedQueue(5);
});

// put
describe('test linkedQueue functionalities', () => {
  test('test put function', () => {
    linkedQueue.put(3);
    linkedQueue.put(2);
    linkedQueue.put(1);

    expect(linkedQueue.print()).toBe('321');
  });
});

// get
describe('test linkedQueue functionalities', () => {
  test('test get function', () => {
    linkedQueue.put(3);
    linkedQueue.put(2);
    linkedQueue.put(1);
    linkedQueue.get();

    expect(linkedQueue.print()).toBe('21');
  });
});

// get
describe('test linkedQueue functionalities', () => {
  test('test get function', () => {
    linkedQueue.put(3);
    linkedQueue.put(2);
    linkedQueue.put(1);
    linkedQueue.get();
    linkedQueue.get();
    linkedQueue.get();

    expect(linkedQueue.print()).toBe(undefined);
  });
});

//peek
describe('test linkedQueue functionalities', () => {
  test('test peek function', () => {
    expect(linkedQueue.peek()).toBe(undefined);
  });
});

describe('test linkedQueue functionalities', () => {
  test('test peek function', () => {
    linkedQueue.put(3);
    linkedQueue.put(2);

    expect(linkedQueue.peek()).toBe(2);
  });
});

describe('test linkedQueue functionalities', () => {
  test('test peek function', () => {
    linkedQueue.put(3);

    expect(linkedQueue.peek()).toBe(3);
  });
});
