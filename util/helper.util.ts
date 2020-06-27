import { Comparator } from './comparator';
export function getRandomInt(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
}

export function isCorrectOrder<T>(arr: T[], comparator: Comparator<T>): boolean {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i-1] === undefined || !arr[i] === undefined) {
            throw new Error(`values are invalid ${arr[i-1]} and ${arr[i]}`);
        }

        if (comparator.less(arr[i], arr[i-1])) return false;
    }
    return true;
}

export function exchange<T>(arr: T[], i: number, j: number): void {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


export function generateRandomNumberArr(total: number): number[] {
    const arr = new Array(total);
    for (let i = 0; i < total; i++) {
      arr[i] = getRandomInt(total);
    }
    return arr;
}
