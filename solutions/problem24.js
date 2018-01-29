/*Lexicographic permutations
A permutation is an ordered arrangement of objects. 
For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. 
If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. 
The lexicographic permutations of 0, 1 and 2 are:
012   021   102   120   201   210
What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?*/

function GetLexicographicPermutation(n, data) {
    let permutation = data.join(''),
        permutationIndex = 1;

    while (permutationIndex < n) {
        permutation = getNextPermutation(permutation);
        permutationIndex++;
    }

    return permutation;
}

/* Algorithm for generation permutations in lexicographic order (Narayana Pandita, 14th century) */
function getNextPermutation(permutation) {
    let { k, l } = getPermutationIndexes(permutation);
    permutation = swapStringElements(permutation, k, l);
    return reverseStringAfterIndex(permutation, k);
}

function getPermutationIndexes(permutation) {
    let k = 0,
        l = 0;
    for (let i = 0; i < permutation.length - 1; i++) {
        if (permutation.charAt(i) < permutation.charAt(i + 1)) {
            k = i;
        }
        if (permutation.charAt(i + 1) > permutation.charAt(k)) {
            l = i + 1;
        }
    }
    return { k, l };
}

function swapStringElements(string, aIndex, bIndex) {
    let elementA = string.charAt(aIndex),
        elementB = string.charAt(bIndex);
    string = string.slice(0, bIndex) + elementA + string.slice(bIndex + 1);
    string = string.slice(0, aIndex) + elementB + string.slice(aIndex + 1);
    return string;
}

function reverseStringAfterIndex(string, index) {
    let startElements = string.slice(0, index + 1),
        endElements = string.slice(index + 1).split('').reverse().join('');
    return startElements + endElements;
}

console.log('GetLexicographicPermutation:', GetLexicographicPermutation(1000000, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));