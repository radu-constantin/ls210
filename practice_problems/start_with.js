function startsWith(string, searchString) {
  if (searchString === '') return true;
  if (searchString.length > string.length) return false;

  for (index = 0; index < searchString.length; index += 1) {
    if (string[index] !== searchString[index]) return false;
    return true;
  }
}

let str = 'We put comprehension and mastery above all else';
let longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, 'We'));              
console.log(startsWith(str, 'We put'));          
console.log(startsWith(str, ''));                
console.log(startsWith(str, 'put'));             
console.log(startsWith(str, longerString))