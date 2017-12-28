/* By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
What is the 10 001st prime number?*/

function getPrimeNumber(n) {
    let primeNumbers = [2];
    for (let i = 1; i < n; i++) {
        primeNumbers.push(getNextPrimeNumber(primeNumbers));
    }
    return primeNumbers[primeNumbers.length - 1];
}

function getNextPrimeNumber(primeNumbers) {
    let startValue = primeNumbers[primeNumbers.length - 1];
    for (let i = startValue + 1; ; i++) {
        if (isPrimeNumber(i, primeNumbers)) {
            return i;
        }
    }
}

/* number is a prime if:
    - has a divider in scope of [2..sqrt(n)], since factors from values above will repeat 
    - a divider is a prime value also, since checking on non-prime values will be also duplication
*/
function isPrimeNumber(value, primeNumbers) {
    let maxFactor = Math.sqrt(value);
    for (let i = 0; i < primeNumbers.length && primeNumbers[i] <= maxFactor; i++) {
        if (value % primeNumbers[i] === 0) return false;
    }
    return true;
}


console.log('PrimeNumber:', getPrimeNumber(10001));