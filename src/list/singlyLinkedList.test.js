const SinglyLinkedList = require('./signlyLinkedList');

let singlyLinkedList;
beforeEach(() => {
  singlyLinkedList = new SinglyLinkedList(5);
});

// isEmpty
describe('test singlyLinkedList functionalities', () => {
  test('test isEmpty function', () => {
    expect(singlyLinkedList.isEmpty()).toBe(true);
  });
});
