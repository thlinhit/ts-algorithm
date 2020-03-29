import { LinkedList } from './linked-list';

class DoublyNode<T> {
  constructor(public value: T, public next: DoublyNode<T> = null, public prev: DoublyNode<T> = null) {}
}

export class DoublyLinkedList<T> implements LinkedList<T> {
  private head: DoublyNode<T>;

  addFirst(value: T): void {
    if (!this.head) {
      this.head = new DoublyNode(value);
      return;
    }

    const newNode = new DoublyNode(value, this.head);
    this.head.prev = newNode;
    this.head = newNode;
  }

  addLast(value: T): void {
    const lastNode = this.getLastNode();

    if (!lastNode) {
        this.head = new DoublyNode(value);
        return;
    } 

    const newNode = new DoublyNode(value, null, lastNode);
    lastNode.next = newNode;
  }

  peekFirst(): T {
    return this.head?.value || null;
  }

  peekLast(): T {
    return this.getLastNode()?.value;
  }

  pollFirst(): T {
    if (!this.head?.next) {
        const current = this.head;
        this.head = null;
        return current?.value || null;
    } 

    const current = this.head;

    this.head.next.prev = null;
    this.head = this.head.next;

    return current.value;
  }

  pollLast(): T {
    const lastNode = this.getLastNode();
    if (!lastNode?.prev) {
        const current = lastNode;
        this.head = null;
        return current?.value || null;
    }

    lastNode.prev.next = null;
    return lastNode.value;
  }

  remove(value: T): boolean {
    let current = this.head;

    if (!current) {
        return false;
    }

    if (!current.next && current.value == value) {
        this.head = null;
        return true;
    }

    while (current) {
        if (current.value == value) {
            if (current == this.head) {
                this.head = current.next;
            }
            if (current.next) current.next.prev = current.prev;
            if (current.prev) current.prev.next = current.next;
            return true;
        }
        current = current.next;
    }

    return false;
  }

  isEmpty(): boolean {
    return !this.head;
  }

  private getLastNode(): DoublyNode<T> {
    let current = this.head;

    while (current?.next) {
      current = current.next;
    }

    return current;
  }
}
