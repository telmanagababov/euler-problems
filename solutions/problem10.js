/* Summation of primes
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
Find the sum of all the primes below two million.*/

function getSummationOfPrimes(n) {
    let primes = [2];
    for (let i = 3; i < n; i += 2) {
        if (!isDivides(i, primes)) {
            primes.push(i);
        }
    }
    return primes.reduce((acc, item) => acc + item, 0);
}

function isDivides(n, primes) {
    let maxFactor = Math.floor(Math.sqrt(n));
    for (let i = 0; i < primes.length && primes[i] <= maxFactor; i++) {
        if (n % primes[i] === 0) return true;
    }
    return false;
}

console.log('SummationOfPrimes:', getSummationOfPrimes(2000000));