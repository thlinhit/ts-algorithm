import { Insertionsort } from './../insertion-sort/inserstion-sort';
import { Comparator } from './../../../util/comparator';
import { knuthRandom } from '../../random/knuth-random';
import { exchange } from '../../../util/helper.util';
export class ThreeWayPartitioningQuickSort {
  // eslint-disable-next-line
  private constructor() {}

  public static sort<T>(arr: T[], comparator: Comparator<T>): void {
    // Randomize the input array to avoid running to the worst case
    knuthRandom(arr);

    this.recursiveSort(arr, comparator, 0, arr.length - 1);
  }

  private static recursiveSort<T>(arr: T[], comparator: Comparator<T>, from: number, to: number): void {
    if (from >= to) {
      return;
    }

    // Improvement: Use Insertionsort because Mergesort is complicated for arrays of ~ 7 elements.
    if (to - from + 1 <= 5) {
      Insertionsort.sort(arr, comparator, from, to);
      return;
    }

    let lt = from;
    let i = from + 1;
    let gt = to;
    const pivot = arr[from];

    while (i <= gt) {
      if (comparator.less(arr[i], pivot)) {
        exchange(arr, lt++, i++);
        continue;
      }

      if (comparator.less(pivot, arr[i])) {
        exchange(arr, gt--, i);
        continue;
      }

      i++;
    }

    this.recursiveSort(arr, comparator, from, lt - 1);
    this.recursiveSort(arr, comparator, gt + 1, to);
  }
}
