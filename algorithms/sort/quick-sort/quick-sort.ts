import { Insertionsort } from './../insertion-sort/inserstion-sort';
import { Comparator } from './../../../util/comparator';
import { knuthRandom } from '../../random/knuth-random';
import { exchange } from '../../../util/helper.util';

export class Quicksort<T> {
  // eslint-disable-next-line
  private constructor() {}

  static sort<T>(arr: T[], comparator: Comparator<T>): void {
    // Randomize the input array to avoid running to the worst case
    knuthRandom(arr);

    this.recursiveSort(arr, comparator, 0, arr.length - 1);
  }

  private static recursiveSort<T>(arr: T[], comparator: Comparator<T>, from: number, to: number): void {
    if (from >= to) return;

    // Improvement: Use Insertionsort because Mergesort is complicated for arrays of ~ 7 elements.
    if (from - to + 1 <= 7) {
      Insertionsort.sort(arr, comparator, from, to);
    }

    const middle = this.partition(arr, comparator, from, to);

    this.recursiveSort(arr, comparator, from, middle - 1);
    this.recursiveSort(arr, comparator, middle + 1, to);
  }

  private static partition<T>(arr: T[], comparator: Comparator<T>, from: number, to: number): number {
    const paritioningItem = arr[from];

    let left = from;
    let right = to + 1;

    while (true) {
      while (comparator.less(arr[++left], paritioningItem)) {
        if (left == to) break;
      }
      while (comparator.less(paritioningItem, arr[--right])) {
        if (right == from) break;
      }

      if (left >= right) break;
      exchange(arr, left, right);
    }

    exchange(arr, from, right);
    return right;
  }
}
