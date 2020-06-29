import { Comparator } from './../../util/comparator';
import { MinHeap } from './../heap/min-heap';

export class PriorityQueue<T> {
  private heap: MinHeap<T>;

  constructor(comparator: Comparator<T>) {
    this.heap = new MinHeap(comparator);
  }

  /**
   * Inserts the specific element in the particular position according its priority
   * @param item
   *
   * @runnningTime O(1) if Min Heap - O(N) if loop
   * @question should we care about duplicates elements?
   */
  public offer(item: T): void {
    if (!this.heap.contains(item)) {
      this.heap.push(item);
    }
  }

  /**
   * Remove all of the elements
   */
  public clear(): void {
    this.heap.clear();
  }

  /**
   * Check it the element exists in the queue
   * @param element
   * @returns true - if it exists ortherwise false
   *
   * @runnningTime O(n) if Min Heap - could be O(1) if using Hash?
   */
  contains(item: T): boolean {
    return this.heap.contains(item);
  }

  /**
   * Return but NOT remove the highest-priority element
   * @runnningTime O(1) if Min Heap
   * @returns element if found, otherwise null
   */
  public peek(): T {
    return this.heap.peek();
  }

  /**
   * Return and Remove the highest-priority element
   * @runnningTime O(log n) if Min Heap as it needs to remove the element as well
   * @returns element if found, otherwise null
   */
  poll(): T {
    return this.heap.pop();
  }
}
