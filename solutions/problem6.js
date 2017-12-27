/* Sum square difference
The sum of the squares of the first ten natural numbers is,
12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,
(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.*/

function getSquareDifference(n) {
    let sum = getSum(n),
        squaresSum = getSquaresSum(n);
    return sum * sum - squaresSum;
}

/* Formula: n(n + 1) / 2 */
function getSum(n) {
    return n * (n + 1) / 2;
}

/* Formula: n(n + 1)(2n + 1) / 6 */
function getSquaresSum(n) {
    return n * (n + 1) * (2 * n + 1) / 6;
}

console.log('SquareDifference:', getSquareDifference(100));