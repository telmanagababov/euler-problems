/* Special Pythagorean triplet
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.
There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.*/

/* BruteForce solution */
function getProductOfPythagoreanTriplet(n) {
    for (let a = 1; a <= n - 2; a++) {
        for (let b = a + 1; b <= n - 1; b++) {
            let c = n - a - b;
            if (a * a + b * b === c * c) {
                return a * b * c;
            }
        }
    }
}

/* Solution based on Fibonacci sequence */
/*function getProductOfPythagoreanTriplet(n) {
    let i = 0,
        a = 4,
        b = 3,
        c = 5;

    while (a + b + c < n) {
        i++;
        a = 2 * getFibonacciNumber(i + 1) * getFibonacciNumber(i + 2);
        b = getFibonacciNumber(i) * getFibonacciNumber(i + 3);
        c = 2 * getFibonacciNumber(i + 1) * getFibonacciNumber(i + 2) + getFibonacciNumber(i) * getFibonacciNumber(i);
    }

    return a * b * c;
}

function getFibonacciNumber(n) {
    if (getFibonacciNumber[n] === undefined) {
        getFibonacciNumber[n] = getFibonacciNumber(n - 1) + getFibonacciNumber(n - 2);
    }
    return getFibonacciNumber[n];
}
getFibonacciNumber[0] = 0;
getFibonacciNumber[1] = 0;
getFibonacciNumber[2] = 1;*/

console.log('ProductOfPythagoreanTriplet:', getProductOfPythagoreanTriplet(1000));