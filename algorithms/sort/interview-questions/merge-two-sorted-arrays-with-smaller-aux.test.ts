import { Comparator } from './../../../util/comparator';

/*
Merging with smaller auxiliary array. Suppose that the subarray 𝚊[𝟶] to 𝚊[𝚗−𝟷] is sorted and the subarray 𝚊[𝚗] to 𝚊[𝟸∗𝚗−𝟷] is sorted.
 How can you merge the two subarrays so that 𝚊[𝟶] to 𝚊[𝟸∗𝚗−𝟷] is sorted using an auxiliary array of length n?
*/

import { getRandomInt, isCorrectOrder } from '../../../util/helper.util';

describe('Merge two sorted arrays with smaller auxiliary array', () => {
  it('test', () => {
    const arr = generateArr(1000);
    const numberComparator: Comparator<number> = Comparator.create((n1: number, n2: number): -1 | 0 | 1 => {
      if (n1 === n2) return 0;
      return n1 < n2 ? -1 : 1;
    });

    sort(arr, 0, arr.length - 1, numberComparator);

    expect(isCorrectOrder(arr, numberComparator));
  });

    function generateArr(n: number): number[] {
      const arr = new Array(n);
      for (let i = 0; i < n; i++) {
        arr[i] = getRandomInt(n);
      }
      return arr;
    }
});

function merge<T>(arr: T[], lo: number, mid: number, hi: number, comparator: Comparator<T>): void {
  const auxLength = hi - lo + 1;
  const aux: T[] = new Array<T>(auxLength);

  for (let k = lo; k <= mid; k++) {
    aux[k] = arr[k];
  }

  let i = lo;
  let j = mid + 1;

  for (let k = lo; k <= hi; k++) {
    if (i > mid) arr[k] = arr[j++];
    else if (j > hi) arr[k] = aux[i++];
    else if (comparator.lessOrEqual(aux[i], arr[j])) arr[k] = aux[i++];
    else arr[k] = arr[j++];
  }
  return;
}

function sort<T>(arr: T[], lo: number, hi: number, comparator: Comparator<T>): void {
  if (lo >= hi) return;
  const mid = lo + Math.floor((hi - lo) / 2);
  sort(arr, lo, mid, comparator);
  sort(arr, mid + 1, hi, comparator);
  merge(arr, lo, mid, hi, comparator);
}
