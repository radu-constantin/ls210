function isLetter(char) {
  return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
}

function cleanUp(string) {
  let result = "";

  for (let i = 0; i < string.length; i += 1) {
    if (isLetter(string[i])) {
      result += string[i];
    } else {
      if (result.slice(-1) === ' ') continue;
      result += " ";
    }
  }

  return result;
}

console.log(cleanUp("---what's my +*& line?"));