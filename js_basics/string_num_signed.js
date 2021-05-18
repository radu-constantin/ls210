function stringToInteger(stringNum) {
  const numMap = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    0: 0
  };

  let number = 0;
  let multiplier = 1;
  
  for (let i = stringNum.length - 1; i >= 0; i -= 1) {
    if (stringNum[i] === "+") {
      return number;
    } else if (stringNum[i] === "-") {
      return number - number * 2;
    } else {
      number += (numMap[stringNum[i]] * multiplier);
      multiplier = multiplier * 10;
    }
  }

  return number;
}

console.log(stringToInteger('570'))