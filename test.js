
function formingMagicSquare(s) {
    const allPossibleSquares = [
        [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
        [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
        [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
        [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
        [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
        [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
        [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
        [[2, 7, 6], [9, 5, 1], [4, 3, 8]]
    ];

    let minimalValue = Infinity;
    let pattern;

    for (const square of allPossibleSquares) {
        let tempValue = 0;
        tempValue += distance(s[0], square[0]);
        tempValue += distance(s[1], square[1]);
        tempValue += distance(s[2], square[2]);

        if (tempValue < minimalValue) {
            minimalValue = tempValue;
            pattern = square;
        }
    }

    return minimalValue;
}

function distance(arr1, arr2) {
    let result = 0;
    result += Math.abs(arr1[0] - arr2[0]);
    result += Math.abs(arr1[1] - arr2[1]);
    result += Math.abs(arr1[2] - arr2[2]);

    return result;
}

console.log(formingMagicSquare([[4, 5, 8],[2, 4, 1],[1,9,7]]));
