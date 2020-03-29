import { SinglyLinkedList } from './singly-linked-list';

describe('SinglylinkedList', () => {
  let linkedList: SinglyLinkedList<number>;

  beforeEach(() => {
    linkedList = new SinglyLinkedList();
  });

  test('addFirst should work', () => {
    linkedList.addFirst(1);
    expect(linkedList.peekFirst()).toBe(1);

    linkedList.addFirst(2);
    expect(linkedList.peekFirst()).toBe(2);
  });

  test('addLast should work', () => {
    linkedList.addLast(1);
    linkedList.addLast(2);
    expect(linkedList.peekFirst()).toBe(1);
    expect(linkedList.peekLast()).toBe(2);
  });

  test('pollFirst should work', () => {
    expect(linkedList.pollFirst()).toBeNull();
    expect(linkedList.pollFirst()).toBeNull();

    linkedList.addFirst(2);
    expect(linkedList.pollFirst()).toBe(2);
    expect(linkedList.pollFirst()).toBeNull();
  });

  describe('pollLast', () => {
    test('should work if list is empty', () => {
      // when
      const result = linkedList.pollLast();

      // then
      expect(result).toBeNull();
    });

    test('should work if list contains one element', () => {
      // Given
      linkedList.addLast(1);

      // when
      const result = linkedList.pollLast();

      // then
      expect(result).toBe(1);
      expect(linkedList.isEmpty()).toBeTruthy();
    });

    test('should work if list contains more than one element', () => {
      // Given
      linkedList.addLast(1);
      linkedList.addLast(2);

      // when
      let result = linkedList.pollLast();

      // then
      expect(result).toBe(2);
      expect(linkedList.isEmpty()).toBeFalsy();

      // when
      result = linkedList.pollLast();

      //then
      expect(result).toBe(1);
      expect(linkedList.isEmpty()).toBeTruthy();
    });
  });

  describe('remove', () => {
    beforeEach(() => {
      linkedList = new SinglyLinkedList();
      linkedList.addLast(1);
      linkedList.addLast(2);
      linkedList.addLast(3);
      linkedList.addLast(4);
      linkedList.addLast(5);
    });

    test('should work if deleting the first one', () => {
      // when
      linkedList.remove(1);

      // then
      expect(linkedList.peekFirst()).toBe(2);
    });

    test('should work if deleting the last one', () => {
      // when
      const result = linkedList.remove(5);

      // then
      expect(result).toBeTruthy();
      expect(linkedList.peekLast()).toBe(4);
    });

    test('should work if deleting an element in the middle', () => {
      // when
      const result = linkedList.remove(3);

      // then
      expect(result).toBeTruthy();
      expect(linkedList.remove(3)).toBeFalsy();
    });
  });
});
