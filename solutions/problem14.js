/* Longest Collatz sequence
The following iterative sequence is defined for the set of positive integers:
n → n/2 (n is even)
n → 3n + 1 (n is odd)
Using the rule above and starting with 13, we generate the following sequence:
13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
Which starting number, under one million, produces the longest chain?
NOTE: Once the chain starts the terms are allowed to go above one million.*/

let collatzNumbers = new Map();
collatzNumbers.set(1, 1);

function getLongestCollatzSequence(n) {
    let longestNumber = 1,
        longestSequence = 1;
    for (let i = 2; i <= n; i++) {
        let currentSequence = getCollatzSequence(i);
        if (currentSequence > longestSequence) {
            longestSequence = currentSequence;
            longestNumber = i;
        }
    }
    return longestNumber;
}

function getCollatzSequence(n) {
    if (!collatzNumbers.has(n)) {
        let nextNumber = isEven(n) ? n / 2 : n * 3 + 1;
        collatzNumbers.set(n, 1 + getCollatzSequence(nextNumber));
    }
    return collatzNumbers.get(n);
}

function isEven(n) {
    return n % 2 === 0;
}

console.log('LongestCollatzSequence:', getLongestCollatzSequence(1000000));