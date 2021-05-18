function trim(string) {
  let trimmed = trimLeft(string);
  trimmed = trimRight(trimmed);

  return trimmed;
}

function trimLeft(string) {
  let newString = '';
  let copyMode = false;

  for (let index = 0; index < string.length; index += 1) {
    if (string[index] !== ' ') {
      copyMode = true;
    }

    if (copyMode) {
      newString += string[index];
    }
  }

  return newString;
}

function trimRight(string) {
  let newString = '';
  let copyMode = false;

  for (let index = string.length - 1; index >= 0; index -= 1) {
    if (string[index] !== ' ') {
      copyMode = true;
    }

    if (copyMode) {
      newString = string[index] + newString;
    }
  }

  return newString;
}