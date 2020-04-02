import { DoublyLinkedList } from './../linked-list/doubly-linked-list';
import { LinkedList } from './../linked-list/linked-list';


export class Queue<T> {
    private list: LinkedList<T>;

    constructor() {
        this.list = new DoublyLinkedList();
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
