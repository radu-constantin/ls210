function toLowerCase(string) {
  let lowerCase = '';
  for (index = 0; index < string.length; index += 1) {
    let ascii = string.charCodeAt(index);
    if (ascii >= 65 && ascii <=90) {
      ascii += 32;
      lowerCase += String.fromCharCode(ascii);
    } else lowerCase += string[index]
  }

  return lowerCase;
}

console.log(toLowerCase('abcDEF'));