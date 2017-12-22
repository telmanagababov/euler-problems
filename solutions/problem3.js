/* Largest prime factor
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ? */

function getLargestPrimeFactor(n) {
    let highestValue = Math.floor(Math.sqrt(n));
    while (highestValue) {
        if (isFactor(n, highestValue) && isPrime(highestValue)) {
            return highestValue;
        }
        highestValue--;
    }
    return 0;
}

function isPrime(value) {
    let highestFactor = Math.floor(Math.sqrt(value));
    for (let i = 2; i <= highestFactor; i++) {
        if (isFactor(value, i)) {
            return false;
        }
    }
    return true;
}

function isFactor(n, value) {
    return n % value === 0;
}

console.log('LargestPrimeFactor:', getLargestPrimeFactor(600851475143));