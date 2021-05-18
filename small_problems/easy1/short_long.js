function shortLongShort(string1, string2) {
  let longerString = string1.length > string2.length ? string1 : string2;
  let shorterString = string1.length < string2.length ? string1 : string2

  return shorterString + longerString + shorterString; 
}

console.log(shortLongShort('', 'xyz'));