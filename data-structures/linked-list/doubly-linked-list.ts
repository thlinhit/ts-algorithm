import { LinkedList } from './linked-list';

class DoublyNode<T> {
  constructor(public value: T, public next: DoublyNode<T> = null, public prev: DoublyNode<T> = null) {}
}

export class DoublyLinkedList<T> implements LinkedList<T> {
  private head: DoublyNode<T>;
  private tail: DoublyNode<T>;

  addFirst(value: T): void {
    if (!this.head) {
      this.head = new DoublyNode(value);
      this.tail = this.head;
      return;
    }

    const newNode = new DoublyNode(value, this.head);
    this.head.prev = newNode;
    this.head = newNode;
  }

  addLast(value: T): void {
    if (!this.head) {
      this.head = new DoublyNode(value);
      this.tail = this.head;
      return;
    }

    const newNode = new DoublyNode(value, null, this.tail);
    this.tail.next = newNode;
    this.tail = newNode;
  }

  peekFirst(): T {
    return this.head?.value || null;
  }

  peekLast(): T {
    return this.tail?.value || null;
  }

  pollFirst(): T {
    if (!this.head?.next) {
      const current = this.head;
      this.head = this.tail = null;
      return current?.value || null;
    }

    const current = this.head;

    this.head.next.prev = null;
    this.head = this.head.next;

    return current.value;
  }

  pollLast(): T {
    const current = this.tail;
    if (current == this.head) {
      this.head = this.tail = null;
      return current?.value || null;
    }

    this.tail = this.tail.prev;
    this.tail.next = null;
    return current.value;
  }

  remove(value: T): boolean {
    if (!this.head) {
      return false;
    }

    if (this.head.value == value) {
      if (this.head == this.tail) {
        this.head = this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
      return true;
    }

    let current = this.head;

    while (current) {
      if (current.value == value) {
        if (current == this.tail) {
          this.tail = current.prev;
          this.tail.next = null;
        } else {
          current.next.prev = current.prev;
          current.prev.next = current.next;
        }
        return true;
      }
      current = current.next;
    }

    return false;
  }

  isEmpty(): boolean {
    return !this.head;
  }
}
