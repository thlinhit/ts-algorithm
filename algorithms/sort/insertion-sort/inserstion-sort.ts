import { Comparator } from './../../../util/comparator';
import { exchange } from '../../../util/helper.util';

export class Insertionsort<T> {
  static sort<T>(arr: T[], comparator: Comparator<T>, from?: number, to?: number): void {
    let i = from || 0;
    const length = to || arr.length;

    for (; i < length; i++) {
      for (let j = i; j > 0 && comparator.less(arr[j], arr[j - 1]); j--) {
        exchange(arr, j - 1, j);
      }
    }
  }
}
