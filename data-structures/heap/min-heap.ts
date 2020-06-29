import { Comparator } from './../../util/comparator';
import { exchange } from '../../util/helper.util';

export class MinHeap<T> {
  private arr: T[];

  constructor(private comparator: Comparator<T>) {
    this.arr = [];
  }

  public push(item: T): void {
    if (item == null) {
      throw new Error('Item must not nil');
    }

    this.arr.push(item);
    this.float(this.arr.length - 1);
  }

  public pop(): T {
    if (this.arr.length === 0) {
      throw new Error('Heap is empty');
    }

    exchange(this.arr, 0, this.arr.length - 1);

    const result = this.arr.pop();

    this.sink(0);

    return result;
  }

  public peek(): T {
    if (this.arr.length === 0) {
      throw new Error('Heap is empty');
    }

    return this.arr[this.arr.length - 1];
  }

  public contains(item: T): boolean {
    if (item == null) {
      throw new Error('Item must not nil');
    }
    
    return this.arr.includes(item);
  }

  public clear(): void {
    this.arr = [];
  }

  private float(idx: number): void {
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);

      if (this.comparator.less(this.arr[parentIdx], this.arr[idx])) {
        return;
      }

      exchange(this.arr, idx, parentIdx);
      idx = parentIdx;
    }
  }

  private sink(idx: number): void {
    while (2 * idx + 1 <= this.arr.length - 1) {
      let childIdx = 2 * idx + 1;
      if (childIdx < this.arr.length - 1 && this.comparator.less(this.arr[childIdx + 1], this.arr[childIdx])) {
        childIdx++;
      }

      if (this.comparator.less(this.arr[idx], this.arr[childIdx])) {
        return;
      }

      exchange(this.arr, idx, childIdx);
      idx = childIdx;
    }
  }
}
