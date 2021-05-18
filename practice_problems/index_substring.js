function indexOf(string1, string2) {
  let totalLength = string1.length - string2.length;
  let startIndex;
  let str2Index = 0;

  for (let i = 0; i < totalLength; i += 1) {
    if (string1[i] === string2[str2Index]) {
      startIndex = i;
      str2Index += 1;
    } else {
      startIndex = -1;
      str2Index = 0
    }
  }
  return startIndex;
}

console.log(indexOf('Some strings', 's'));