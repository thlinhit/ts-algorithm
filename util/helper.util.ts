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
