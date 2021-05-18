function substr(string, start, length) {
  let substring = '';
  start = start < 0 ? string.length + start : start;
  let max  = start + length;

  for(let index = start; index < max; index += 1) {
    if (string[index] === undefined) break;
    substring += string[index];
  }
  return substring;
}

let string = 'hello world';

console.log(substr(string, 2, 4));
console.log(substr(string, -3, 2));
console.log(substr(string, 8, 20));
console.log(substr(string, 0, -20));
console.log(substr(string, 0, 0));