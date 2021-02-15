function crunch(string) {
  let result = '';
  let currentChar;

  for (let i = 0; i < string.length; i += 1) {
    if (currentChar === string[i]) {
      continue;
    } else {
      result += string[i];
      currentChar = string[i];
    }
  }

  return result;
}

console.log(crunch(''))