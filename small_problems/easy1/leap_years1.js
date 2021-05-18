function isLeapYear(year) {
  if (year < 1752) {
    if (year % 4 === 0) {
      return true;
    } else return false;
  } else {
    if (year % 4 === 0 && year % 100 !== 0) {
      return true;
    } else if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(isLeapYear(1700));
