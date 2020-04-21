
export function getRandomInt(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
}

export function isCorrectOrder<T>(arr: T[], comparator: (t1: T, t2: T) => (-1 | 0 | 1)): boolean {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i-1] === undefined || !arr[i] === undefined) {
            throw new Error(`values are invalid ${arr[i-1]} and ${arr[i]}`);
        }
        if (comparator(arr[i-1], arr[i]) > 0) return false;
    }
    return true;
}
