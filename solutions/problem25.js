/*1000-digit Fibonacci number
The Fibonacci sequence is defined by the recurrence relation:
Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
Hence the first 12 terms will be:
F1 = 1
F2 = 1
F3 = 2
F4 = 3
F5 = 5
F6 = 8
F7 = 13
F8 = 21
F9 = 34
F10 = 55
F11 = 89
F12 = 144
The 12th term, F12, is the first term to contain three digits.
What is the index of the first term in the Fibonacci sequence to contain 1000 digits?*/

function GetIndexOfFirstFibonacciNumberWithDigits(n) {
    let index = 1,
        prevValue = '0',
        curValue = '1';

    while (curValue.length < n) {
        let nextPrevValue = curValue;
        curValue = sum(curValue, prevValue);
        prevValue = nextPrevValue;
        index ++;
    }

    return index;
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

console.log('IndexOfFirstFibonacciNumberWithDigits:', GetIndexOfFirstFibonacciNumberWithDigits(1000));