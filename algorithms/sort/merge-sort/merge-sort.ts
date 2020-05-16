import { Insertionsort } from './../insertion-sort/inserstion-sort';
import { Comparator } from '../../../util/comparator';

export class Mergesort<T> {
  readonly aux: T[];

  private constructor(private arr: T[], private comparator: Comparator<T>) {
    this.aux = new Array<T>(arr.length);
  }

  static sort<T>(arr: T[], comparator: Comparator<T>): void {
    new Mergesort(arr, comparator).sort(0, arr.length - 1);
  }

  private merge(lo: number, mid: number, hi: number): void {
    let i = lo;
    let j = mid + 1;

    for (let k = lo; k <= hi; k++) {
      this.aux[k] = this.arr[k];
    }

    for (let k = lo; k <= hi; k++) {
      if (i > mid) this.arr[k] = this.aux[j++];
      else if (j > hi) this.arr[k] = this.aux[i++];
      else if (this.comparator.lessOrEqual(this.aux[i], this.aux[j])) this.arr[k] = this.aux[i++];
      else this.arr[k] = this.aux[j++];
    }
  }

  private sort(lo: number, hi: number): void {
    if (lo >= hi) return;

    // Improvement: Use Insertionsort because Mergesort is complicated for arrays of ~ 7 elements.
    if ((hi - lo + 1) <= 7) {
      Insertionsort.sort(this.arr, this.comparator, lo, hi);
    }

    const mid = lo + Math.floor((hi - lo) / 2);

    this.sort(lo, mid);
    this.sort(mid + 1, hi);

    // Improvement: Do not merge if two arrays are already sorted
    if (this.comparator.lessOrEqual(this.arr[mid], this.arr[mid + 1])) return;

    this.merge(lo, mid, hi);
  }
}
