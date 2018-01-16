/*Factorial digit sum
Problem 20 
n! means n × (n − 1) × ... × 3 × 2 × 1
For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.
Find the sum of the digits in the number 100!*/

function getFactorialDigitSum(n) {
    let resultNumber = '1';

    for (let i = 1; i <= n; i++) {
        resultNumber = multiplyBigNumber(resultNumber, i);
    }

    return getDigitsSum(resultNumber);
}

function getDigitsSum(value) {
    return value.split('').map(digit => parseInt(digit)).reduce((acc, item) => acc + item, 0);
}

function multiplyBigNumber(value, factor) {
    let result = '';

    for (let i = factor.toString().length - 1; i >= 0; i--) {
        let digit = factor.toString().charAt(i),
            offset = '0'.repeat(factor.toString().length - 1 - i),
            multiplicationValue = multiply(value, digit) + offset;

        result = sum(result, multiplicationValue);
    }

    return result;
}

function multiply(value, factor) {
    let result = '',
        overflow = 0;

    for (let i = value.length - 1; i >= 0; i--) {
        let digit = value.charAt(i),
            sum = parseInt(digit) * factor + overflow,
            resultDigit = sum % 10;
        overflow = Math.floor(sum / 10);
        result = resultDigit.toString() + result;
    }

    if (overflow) {
        result = overflow + result;
    }

    return result;
}

function sum(a, b) {
    a = '0'.repeat(Math.max(b.length - a.length, 0)) + a;
    b = '0'.repeat(Math.max(a.length - b.length, 0)) + b;

    let result = '',
        overflow = 0;

    for (let i = a.length - 1; i >= 0; i--) {
        let aDigit = a.charAt(i),
            bDigit = b.charAt(i),
            sum = parseInt(aDigit) + parseInt(bDigit) + overflow,
            resultDigit = sum % 10;
        overflow = sum > 9 ? 1 : 0;
        result = resultDigit.toString() + result;
    }

    if (overflow) {
        result = overflow + result;
    }

    return result;
}

console.log('FactorialDigitSum:', getFactorialDigitSum(100));