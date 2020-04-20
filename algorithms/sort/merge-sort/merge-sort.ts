export class Mergesort<T> {
  readonly aux: T[];

  private constructor(private arr: T[], private comparator: (t1: T, t2: T) => -1 | 0 | 1) {
    this.aux = new Array<T>(arr.length);
  }

  static sort<T>(arr: T[], comparator: (t1: T, t2: T) => -1 | 0 | 1): void {
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
      else if (this.comparator(this.aux[i], this.aux[j]) <= 0) this.arr[k] = this.aux[i++];
      else this.arr[k] = this.aux[j++];
    }
  }

  private sort(lo: number, hi: number): void {
    if (lo >= hi) return;
    const mid = lo + Math.floor((hi - lo) / 2);
    this.sort(lo, mid);
    this.sort(mid + 1, hi);
    this.merge(lo, mid, hi);
  }
}
