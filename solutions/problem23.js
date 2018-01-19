/*Non-abundant sums
A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. 
For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.
A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.
As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. 
By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. 
However, this upper limit cannot be reduced any further by analysis even though it is known that 
the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.
Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.*/

const highestAbundantNumber = 28123;
const lowestAbundantNumber = 12;

function getSumOfNonAbundantNumbers() {
    let nonAbundantNumbers = getNonAbundantNumbers();
    return getSum(nonAbundantNumbers);
}

function getNonAbundantNumbers() {
    let abundantNumbers = getAbundantNumbers(),
        abundantSums = generateAbundantSums(abundantNumbers);
    return generateNonAbundantNumbers(abundantSums);
}

function getAbundantNumbers() {
    let abundantNumbers = new Set();
    for (let i = lowestAbundantNumber; i <= highestAbundantNumber; i++) {
        if (isAbundant(i)) {
            abundantNumbers.add(i);
        }
    }
    return abundantNumbers;
}

function generateAbundantSums(abundantNumbers) {
    let abundantSums = new Set();
    for (let abundantA of abundantNumbers) {
        for (let abundantB of abundantNumbers) {
            if (abundantA + abundantB <= highestAbundantNumber) {
                abundantSums.add(abundantA + abundantB);
            } else {
                break;
            }
        }
    }
    return abundantSums;
}

function generateNonAbundantNumbers(abundantSums) {
    let nonAbundantNumbers = new Set();
    for (let i = 1; i <= highestAbundantNumber; i++) {
        if (!abundantSums.has(i)) {
            nonAbundantNumbers.add(i);
        }
    }
    return nonAbundantNumbers;
}

function isAbundant(value) {
    let dividers = getAllDividers(value),
        dividersSum = getSum(dividers);
    return value < dividersSum;
}

function getAllDividers(value) {
    let divisors = value > 1 ? new Set([1]) : new Set(),
        highestFactor = Math.floor(Math.sqrt(value));
    for (let factor = 2; factor <= highestFactor; factor++) {
        if (value % factor === 0) {
            divisors.add(factor);
            divisors.add(value / factor);
        }
    }
    return divisors;
}

function getSum(numbers) {
    let sum = 0;
    numbers.forEach(item => sum += item);
    return sum;
}

console.log('SumOfNonAmicableNumbers:', getSumOfNonAbundantNumbers());