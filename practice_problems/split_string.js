function splitString(string, delimiter) {
  if (delimiter === undefined) {
    console.log('ERROR: No delimiter');
    return;
  }
  
  let substring = '';

  for (i = 0; i < string.length; i += 1) {
    if (i === (string.length - 1)) {
      substring += (string[i]);
      console.log(substring);

    } else if (delimiter === '') {
      substring += (string[i]);
      console.log(substring);
      substring = '';
      
    } else if (string[i] !== delimiter) {
      substring += (string[i]);

    } else if (string[i] === delimiter) {
      console.log(substring);
      substring = '';
    }
  }
}

splitString('abc,123,hello world', ',');