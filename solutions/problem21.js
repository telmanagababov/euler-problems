/*FAmicable numbers
Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.
For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. 
The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.
Evaluate the sum of all the amicable numbers under 10000.*/

function getSumOfAmicableNumbers(n) {
    let amicableNumbers = getAmicableNumbers(n);
    return getSum(amicableNumbers);
}

function getAmicableNumbers(n) {
    var amicableNumbers = new Set(),
        divisors = new Map();
    for (let i = 1; i <= n; i++) {
        let sumDivisors = getSumDivisors(i);
        divisors.set(i, sumDivisors);
        if (sumDivisors !== i && divisors.get(sumDivisors) === i) {
            amicableNumbers.add(i);
            amicableNumbers.add(sumDivisors);
        }
    }
    return amicableNumbers;
}

function getSumDivisors(number) {
    let divisors = getProperDivisors(number);
    return getSum(divisors);
}

function getProperDivisors(number) {
    let divisors = number > 1 ? [1] : [],
        highestFactor = Math.floor(Math.sqrt(number)); 
    for (let factor = 2; factor <= highestFactor; factor++) {
        if (number % factor === 0) {
            divisors.push(factor, number / factor);
        }
    }
    return divisors;
}

function getSum(numbers) {
    let sum = 0;
    numbers.forEach(item => sum += item);
    return sum;
}

console.log('SumOfAmicableNumbers:', getSumOfAmicableNumbers(10000));