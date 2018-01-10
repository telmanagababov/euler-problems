/* Lattice paths
Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, 
there are exactly 6 routes to the bottom right corner.
How many such routes are there through a 20×20 grid?*/


/* A solution with 'binomial coefficient' */
/* The number of lattice paths from the origin (0,0) to a point (a,b) is the binomial coefficient (a+b; a) (Hilton and Pedersen 1991). */
/* The value of the binomial coefficient for nonnegative n and k is given explicitly by (n; k)=(n!)/((n-k)!k!), */
function getLatticePathsNumber(n) {
    return getFactorial(n + n) / (getFactorial(n) * getFactorial(n));
}

function getFactorial(n) {
    let factorial = 1;
    for (let i = factorial; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}


/* Brute Force solution */
/*
let paths = new Map();

function getLatticePathsNumber(n) {
    for (let i = 0; i <= n; i++) {
        paths.set('0:' + i, 1);
        paths.set(i + ':0', 1);
    }
    return getPathsNumber(n, n);
}

function getPathsNumber(cols, rows) {
    if(cols < 0 || rows < 0) return 0;

    let pathId = cols.toString() + ':' + rows.toString(),
        pathIdReverse = rows.toString() + ':' + cols.toString();

    if (!paths.has(pathId)) {
        let pathsNumber = getPathsNumber(cols - 1, rows) + getPathsNumber(cols, rows - 1);
        paths.set(pathId, pathsNumber);
        paths.set(pathIdReverse, pathsNumber);
    }

    return paths.get(pathId);
}*/

console.log('LatticePathsNumber:', getLatticePathsNumber(20));