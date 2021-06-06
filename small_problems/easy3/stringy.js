function stringy(number) {
  result = '';
  for (let i = 1; i <= number; i += 1) {
    let lastChar = result[result.length - 1]
    lastChar === '1' ? result += 0 : result += 1
  }
  return result;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"