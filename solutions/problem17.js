/*Number letter counts
If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?
NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) 
contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.*/
const dictionary = {
    digits: [
        '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',
    ],
    tenths: ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
    hundredsPostfix: 'hundred',
    hundredsSeparator: 'and',
    thousandsPostfix: 'thousand'
};

function getNumberLettersCount(n) {
    let numbers = generateNumbers(n);

    return numbers.reduce((acc, item) => {
        let letters = item.split(' ').join('').split('-').join('');
        console.log(item);
        return acc + letters.length;
    }, 0);
}

function generateNumbers(n) {
    let numbers = [];
    for (let i = 1; i <= n; i++) {
        numbers.push(getNumber(i));
    }
    return numbers;
}

function getNumber(value) {
    if(value < dictionary.digits.length) return dictionary.digits[value];

    let thousands = Math.floor(value / 1000),
        thousandsString = thousands > 0 ? getNumber(thousands) + ' ' + dictionary.thousandsPostfix + ' ': '',
        hundreds = value % 1000 > 0 ? Math.floor((value % 1000) / 100) : 0,
        hundredsString = hundreds > 0 ? getNumber(hundreds) + ' ' + dictionary.hundredsPostfix + ' ' : '',
        tenths = value % 100 > 0 ? Math.floor((value % 100) / 10) : 0,
        tenthsString = tenths > 1 ? dictionary.tenths[tenths] + ' ': '',
        digits = value % 10 > 0 ? Math.floor(value % 10) : 0,
        digitsString = getNumber(tenths === 1 ? 10 + digits : digits),
        hundredsSeparator = (hundreds > 0 && value % 100 > 0) ? dictionary.hundredsSeparator + ' ' : '';

    return thousandsString + hundredsString + hundredsSeparator + tenthsString + digitsString;
}

console.log('NumberLettersCount:', getNumberLettersCount(1000));