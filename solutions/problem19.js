/* Counting Sundays
You are given the following information, but you may prefer to do some research for yourself.
1 Jan 1900 was a Monday.
Thirty days has September,
April, June and November.
All the rest have thirty-one,
Saving February alone,
Which has twenty-eight, rain or shine.
And on leap years, twenty-nine.
A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
*/
const DAY_MS = 1000 * 60 * 60 * 24;
const WEEK_MS = DAY_MS * 7;


function getSundaysNumber(startDate, endDate) {
  let sundaysNumber = 0,
    startTime = getFirstSunday(startDate),
    currentTime = startTime,
    endTime = new Date(endDate).getTime();

  while (currentTime <= endTime) {
    if (isFirstDayOfMonth(currentTime)) {
      sundaysNumber++;
    }
    currentTime += WEEK_MS;
  }

  return sundaysNumber;
}

function getFirstSunday(date) {
  let time = new Date(date).getTime();
  while (!isSunday(time)) {
    time += DAY_MS;
  }
  return time;
}

function isSunday(time) {
  return new Date(time).getDay() === 0;
}

function isFirstDayOfMonth(time) {
  return new Date(time).getDate() === 1;
}

console.log('SundaysNumber:', getSundaysNumber('1 Jan 1901', '31 Dec 2000'));