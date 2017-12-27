/* Smallest multiple
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20? */

/* BruteForce solution
function getSmallestMultiple(n) {
    for (let value = n; ; value += n) {
        if (isDividesBy(value, n)) {
            return value;
        }
    }
}

function isDividesBy(value, n) {
    for (let i = 2; i <= n; i++) {
        if (value % i !== 0) return false;
    }
    return true;
}*/

/* Solution based on Least Common Multiple calculation*/
function getSmallestMultiple(n) {
    let value = 1,
        decomposition = getMergedDecomposition(n);
    for (let item of decomposition) {
        value *= Math.pow(item[0], item[1]);
    }
    return value;
}

function getMergedDecomposition(n) {
    let decompositions = [];
    for (let i = 2; i < n; i++) {
        decompositions.push(decomposite(i));
    }
    return mergeDecompositions(decompositions);
}

function decomposite(n) {
    let decomposition = new Map(),
        i = 2;
    while (n > 1) {
        if (n % i === 0) {
            n = n / i;
            if (decomposition.has(i)) {
                decomposition.set(i, decomposition.get(i) + 1);
            } else {
                decomposition.set(i, 1);
            }
        } else {
            i++;
        }
    }
    return decomposition;
}

function mergeDecompositions(decompositions) {
    return decompositions.reduce((acc, dec) => {
        for (let item of dec) {
            if (acc.has(item[0])) {
                acc.set(item[0], Math.max(acc.get(item[0]), item[1]));
            } else {
                acc.set(item[0], item[1]);
            }
        }
        return acc;
    }, new Map());
}

console.log('SmallestMultiple:', getSmallestMultiple(20));