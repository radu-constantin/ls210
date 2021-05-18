// Input = string
// Output = number
// Rules: do not use JS built-in functions.

// Algorithm:
// 1. Create object with each stringNum as a key and the respective num as a value.
// 2. Get the array of values from the Object.
// 3. Iterate in reverse and for each number do:
  // let number = 0;
  // let multiplier = 1;
  // for (let i = 0; i < String.length; i += 1) {
  //   number += (digits[i] * multiplier);
  //   multiplier = multiplier * 10;
  // }


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
    number += (numMap[stringNum[i]] * multiplier);
    multiplier = multiplier * 10;
  }

  return number;
}

console.log(stringToInteger('570'))