/* Largest palindrome product
A palindromic number reads the same both ways. 
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.
*/

function getBiggestPalindrome(n) {
    let highestPalindrome = -1,
        highestValue = parseInt('9'.repeat(n));
    for (let i = 0; i < highestValue; i++) {
        for (let j = 0; j <= i; j++) {
            let multiplicationValue = i * j;
            if (isPalindrome(multiplicationValue)) {
                highestPalindrome = Math.max(highestPalindrome, multiplicationValue);
            }
        }
    }
    return highestPalindrome;
}

function isPalindrome(value) {
    return value.toString() === reverseString(value.toString());
}

function reverseString(value) {
    return value.split("").reverse().join("");
}

console.log('BiggestPalindrome:', getBiggestPalindrome(3));