function substring(string, start, end = undefined) {
  let substr = '';

  if (end === undefined) end = string.length;

  start = (start < 0 || isNaN(start)) ? 0 : start;
  end = (end < 0 || isNaN(end)) ? 0 : end;

  start = (start > string.length) ? string.length : start;
  end = (end > string.length) ? string.length : end;

  if (start > end) {
    end = [start, start = end][0];
  }

  for(let index = start; index < end; index += 1) {
    substr += string[index];
  }

  return substr;
}

let string = 'hello world';

console.log(substring(string, 2, 4));
console.log(substring(string, 4, 2));
console.log(substring(string, 0, -1));
console.log(substring(string, 2));
console.log(substring(string, 'a'));
console.log(substring(string, 8, 20));