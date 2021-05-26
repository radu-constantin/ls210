function repeatedCharacters(string) {
  let counter = {};
  string = string.toLowerCase();

  for (let i = 0; i < string.length; i += 1) {
    let char = string[i];
    if (counter[char]) {
      counter[char] += 1;
    } else {
      counter[char] = 1;
    }
  }

  for (let key in counter) {
    if (counter[key] < 2) {
      delete counter[key];
    }
  }

  return counter;
}





console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }

// 
//
//
//
//
//
//
//