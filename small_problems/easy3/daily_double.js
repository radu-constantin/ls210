function crunch(string) {
  let result = '';
  for (let i = 0; i < string.length; i += 1) {
    if (result[result.length - 1] !== string[i]) {
      result += string[i];
    }
  }

  return result;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""

/*
input: string with repeated chars;
output: new string with all consecutive duplicate characters removed.

Algorithm:
1. Split string into individual characters.
2. create result variable
3. Iterate through the string.
  if 
*/

