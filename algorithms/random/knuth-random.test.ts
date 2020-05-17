import { knuthRandom } from './knuth-random';

describe('Knuth Random', () => {
    test('should work', () => {
        // Given
        const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        // When
        knuthRandom(arr);

        // Then
        for (let i = 1; i <= 9 ; i++) {
            expect(arr[i - 1]).not.toBe(i);
             expect(arr).toContain(i);
        }
    });
});
