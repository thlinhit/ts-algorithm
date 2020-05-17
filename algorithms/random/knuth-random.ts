import { getRandomInt, exchange } from '../../util/helper.util';

export function knuthRandom<T>(arr: T[]): void {
    for (let i = 1; i < arr.length; i++) {
        const randomNumer = getRandomInt(i);
        exchange(arr, i, randomNumer);
    }
}
