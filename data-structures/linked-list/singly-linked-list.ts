import { LinkedList } from './linked-list';
class SinglyNode<T> {
  constructor(public value: T, public next: SinglyNode<T> = null) {}
}

export class SinglyLinkedList<T> implements LinkedList<T> {
  private head: SinglyNode<T>;

  constructor() {
    this.head = null;
  }

  /**
   * @inheritdoc
   * @runningTime O(1)
   */
  addFirst(value: T): void {
    this.head = new SinglyNode(value, this.head);
  }

  /**
   * @inheritdoc
   * @runningTime O(n)
   */
  addLast(value: T): void {
    const newNode = new SinglyNode(value);
    const lastNode = this.getLastNode();

    if (lastNode) {
      lastNode.next = newNode;
    } else {
      this.head = newNode;
    }
  }

  /**
   * @inheritdoc
   * @runningTime O(1)
   */
  peekFirst(): T {
    return this.head?.value || null;
  }

  /**
   * @inheritdoc
   * @runningTime O(n)
   */
  peekLast(): T {
    return this.getLastNode()?.value || null;
  }

  /**
   * @inheritdoc
   * @runningTime O(1)
   */
  pollFirst(): T {
    const result = this.head?.value || null;
    this.head = this.head?.next || null;
    return result;
  }

  /**
   * @inheritdoc
   * @runningTime O(n)
   */
  pollLast(): T {
    let result: T;

    if (!this.head) {
      return null;
    }

    if (!this.head.next) {
      result = this.head.value;
      this.head = null;
      return result;
    }

    let current = this.head;

    while (current.next.next) {
      current = current.next;
    }
    result = current.next.value;
    current.next = null;
    return result;
  }

  /**
   * @inheritdoc
   * @runningTime O(n)
   */
  remove(value: T): boolean {
    if (!this.head) {
      return false;
    }

    let current = this.head;

    while (current) {
      if (current.value == value) {
        this.head = this.head?.next || null;
        return true;
      }

      if (current.next?.value == value) {
        current.next = current.next.next;
        return true;
      }

      current = current.next;
    }

    return false;
  }

  isEmpty(): boolean {
    return this.head == null;
  }

  private getLastNode(): SinglyNode<T> {
    let current = this.head;

    while (current?.next) {
      current = current.next;
    }

    return current;
  }
}
