import { SinglyLinkedList } from './../linked-list/singly-linked-list';
import { LinkedList } from './../linked-list/linked-list';

export class Queue<T> {
    private list: LinkedList<T>;

    constructor() {
        this.list = new SinglyLinkedList();
    }

    enqueue(element: T): void {
        this.list.addLast(element);
    }

    dequeue(): T {
        return this.list.pollFirst();
    }

    isEmpty(): boolean {
        return this.list.isEmpty();
    }    
}
