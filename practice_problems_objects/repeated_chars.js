function repeatedCharacters(string) {
  string = string.toLowerCase();
  let result = {};
  let counter = 0;

  for (let i = 0; i < string.length; i += 1) {
    let counter = 0;
    let current_char = string[i];

    for (let x = 0; x < string.length; x += 1) {
      if (current_char === string[x]) counter += 1;
    }

    if (counter > 1) result[current_char] = counter;
  }

  return result;
}

console.log(repeatedCharacters('Paper'));