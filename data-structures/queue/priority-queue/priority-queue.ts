// TODO: should revise Min Heap (Binary Heap) before implementing this structures (as it is a common way to implement Priority Queue)

/**
 * @referemce [Queue Interface](https://docs.oracle.com/javase/7/docs/api/java/util/Queue.html)
 * @missing add(), remove(), element()
 */
export interface PriorityQueue<T> {
  /**
   * Inserts the specific element in the particular position according its priority
   * @param element
   * @returns true if successful
   *
   * @runnningTime O(1) if Min Heap - O(N) if loop
   * @question should we care about duplicates elements?
   */
  offer(element: T): boolean;

  /**
   * Remove all of the elements
   */
  clear(): void;

  /**
   * Check it the element exists in the queue
   * @param element
   * @returns true - if it exists ortherwise false
   *
   * @runnningTime O(n) if Min Heap - could be O(1) if using Hash?
   */
  contains(element: T): boolean;

  /**
   * Return but NOT remove the highest-priority element
   * @runnningTime O(1) if Min Heap
   * @returns element if found, otherwise null
   */
  peek(): T | null;

  /**
   * Return and Remove the highest-priority element
   * @runnningTime O(log n) if Min Heap as it needs to remove the element as well
   * @returns element if found, otherwise null
   */
  poll(): T | null;
}
