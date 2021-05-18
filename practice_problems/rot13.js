// Will return if a character is a lowercase or uppercase letter. If it is not a letter it will return false.
function isLetter(unicode) {
  if (unicode >= 65 && unicode <= 90) {
    return 'uppercase';
  } else if (unicode >= 97 && unicode <= 122) {
    return 'lowercase';
  } else return false;
}

// Will rotate the character based on the cypher.
function rotateLetter(character) {
  const SHIFT = 26;
  let unicode = character.charCodeAt(0);
  let rotatedUnicode = unicode + 13;

  if (isLetter(unicode) === false) {
    return character;
  } else if (isLetter(unicode) === 'uppercase') {
      let asciiRangeEnd = 90;

      if (rotatedUnicode > asciiRangeEnd) {
        rotatedUnicode -= SHIFT;
      }
  } else if (isLetter(unicode) === 'lowercase') {
      let asciiRangeEnd = 122;

      if (rotatedUnicode > asciiRangeEnd) {
        rotatedUnicode -= SHIFT;
      }
  }

  return String.fromCharCode(rotatedUnicode)
}

function rot13(string) {
  let rotatedString = '';
  for (let index = 0; index < string.length; index += 1) {
    rotatedString += rotateLetter(string[index]);
  }
  return rotatedString;
}

let string = 'Teachers open the door, but you must enter by yourself.';

console.log(rot13(rot13(string)));