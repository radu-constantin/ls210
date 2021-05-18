function missing(arr) {
  let missingNums = []

  let max = arr.slice().sort()[arr.length - 1];
  let min = arr.slice().sort()[0];

  for(let i = min + 1; i < max; i += 1) {
    if (arr.includes(i)) continue;
    missingNums.push(i);
  }

  return missingNums;
}

console.log(missing([6]));