const DoublyLinkedList = require('./doublyLinkedList');

let doublyLinkedList;
beforeEach(() => {
  doublyLinkedList = new DoublyLinkedList(5);
});

// isEmpty
describe('test doublyLinkedList functionalities', () => {
  test('test isEmpty function', () => {
    expect(doublyLinkedList.isEmpty()).toBe(true);
  });
});
