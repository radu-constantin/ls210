function wordCount(string) {
  let counter = {};
  let words = string.split(' ');

  for (let i = 0; i < words.length; i += 1) {
    let word = words[i];
    if (counter[word]) {
      counter[word] += 1;
    } else {
      counter[word] = 1;
    }
  }

  return counter;
}

console.log(wordCount('box car cat bag box'));