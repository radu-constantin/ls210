function wordCount(string) {
  let wordCounter = {}
  let words = string.split(' ');

  for (let i = 0; i < words.length; i += 1) {
    let word = words[i];

    console.log(word)
    console.log(wordCounter[word]);
    if (!wordCounter[word]) {
      wordCounter[word] = 0;
    } else {
      wordCounter[word] += 1;
    }
  }

  return wordCounter;
}

console.log(wordCount('box car cat bag box'));