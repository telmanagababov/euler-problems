/*Power digit sum
215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
What is the sum of the digits of the number 21000?*/

function getSumOfPowerDigits(n) {
    let resultNumber = '2';

    for(let i = 1; i < n; i++) {
        resultNumber = getDoubleBigNumber(resultNumber);
    }

    return getDigitsSum(resultNumber);
}

function getDigitsSum(value) {
    return value.split('').map(digit => parseInt(digit)).reduce((acc, item) => acc + item);
}

function getDoubleBigNumber(value) {
    let result = '',
        overflow = 0;
    for(let i = value.length - 1; i >= 0; i--) {
        let digit = value.charAt(i),
            sum = parseInt(digit) * 2 + overflow,
            resultDigit = sum % 10;
        overflow = sum > 9;
        result = resultDigit.toString() + result;
    }
    if(overflow) {
        result = '1' + result;
    }
    return result;
}

/* works until n < 53 
function getSumOfPowerDigits(n) {
    let value = Math.pow(2, n),
        digitsSum = 0;

    while (value > 0) {
        let digit = value % 10;
        digitsSum += digit;
        value = Math.floor(value / 10);
    }

    return digitsSum;
}*/

console.log('SumOfPowerDigits:', getSumOfPowerDigits(1000));