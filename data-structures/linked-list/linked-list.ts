export interface LinkedList<T> {
  /**
   * Insert the specific element at the front of this list
   *
   * @param value
   */
  addFirst(value: T): void;

  /**
   * Insert the specific element at the end of this list
   *
   * @param value
   */
  addLast(value: T): void;

  /**
   * Retrieve but does **NOT** remove the first element of this list
   *
   * @returns value - if exists otherwise `null` if the list is *empty*
   */
  peekFirst(): T;

  /**
   * Retrieve but does **NOT** remove the last element of this list
   *
   * @returns value - if exists otherwise `null` if the list is *empty*
   */
  peekLast(): T;

  /**
   * Retrieve and remove the first element of this list
   *
   * @returns value - if exists otherwise `null` if the list is *empty*
   */
  pollFirst(): T;

  /**
   * Retrieve and remove the last element of this list
   *
   * @returns value - if exists otherwise `null` if the list is *empty*
   */
  pollLast(): T;

  /**
   * Remove the specific element of this list
   *
   * @returns `true` if it is present, otherwise return `false`
   */
  remove(value: T): boolean;

  isEmpty(): boolean;
}
