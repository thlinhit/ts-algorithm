import { SinglyLinkedList } from './../linked-list/singly-linked-list';
import { LinkedList } from './../linked-list/linked-list';

export class Stack<T> {
  private list: LinkedList<T>;

  constructor() {
    this.list = new SinglyLinkedList();
  }

  push(element: T): void {
    this.list.addFirst(element);
  }

  pop(): T {
    return this.list.pollFirst();
  }

  isEmpty(): boolean {
    return this.list.isEmpty();
  }
}
