function repeat(string, times) {
  if (isNaN(times) || times < 0) return undefined;
  if (times === 0) return '';

  let repeatedString = ''

  for (counter = 1; counter <= times; counter += 1) {
    repeatedString += string;
  }

  return repeatedString;
}

console.log(repeat('abc', 2));