/* Multiples of 3 and 5
If we list all the natural numbers below 10 that are multiples of 3 or 5, 
we get 3, 5, 6 and 9. 
The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/

function getSumOfMultiplesOf3And5(n) {
    let sum = 0;
    for (let i = 3; i < n; i++) {
        if (isMultiplesOfMultiplesOf3Or5(i)) {
            sum += i;
        }
    }
    return sum;
}

function isMultiplesOfMultiplesOf3Or5(value) {
    return isMultiples(value, 3) || isMultiples(value, 5);
}

function isMultiples(value, multiplier) {
    return value % multiplier === 0;
}

console.log('SumOfMultiplesOf3And5:', getSumOfMultiplesOf3And5(1000));