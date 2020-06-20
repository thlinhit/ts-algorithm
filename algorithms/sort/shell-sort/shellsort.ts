import { Comparator } from '../../../util/comparator';
import { exchange } from '../../../util/helper.util';

export class Shellsort {
    static sort<T>(arr: T[], comparator: Comparator<T>): void {
        const arrLength = arr.length;

        let h = 1;

        while (h < Math.floor(arrLength/3)) {
            h = h*3 + 1;
        }

        while ( h >= 1) {
            for (let i = h; i < arrLength; i++) {
                for (let j = i; j >= h && comparator.less(arr[j], arr[j - h]); j -= h) {
                    exchange(arr, j, j - h);
                }
            }
            h = Math.floor(h/3);
        }
    }
}
