function findCentury(year) {
  let century = Math.floor(year / 100);
  if (century === 0 || year % 100 !== 0) {
    century += 1;
  }

  let lastDigit = String(century).slice(-1);
  let suffix;

  if (lastDigit == 1) {
    suffix = 'st';
  } else if (lastDigit == 2) {
    suffix = 'nd';
  } else if (lastDigit == 3) {
    suffix = 'rd';
  } else {
    suffix = 'th';
  }
  
  return century + suffix;
}

console.log(findCentury(11201));