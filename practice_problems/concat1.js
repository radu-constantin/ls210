function concat(array1, ...secondArgument) {
  let result = array1;
  
  for(let mainIndex = 0; mainIndex < secondArgument.length; mainIndex += 1) {
    if (Array.isArray(secondArgument[mainIndex])) {
      for(let i = 0; i < secondArgument[mainIndex].length; i += 1) {
        result.push(secondArgument[mainIndex][i]);
      }
    } else result.push(secondArgument[mainIndex]);
  }

  return result;
}

let test = concat([1, 2, 3], [4, 5, 6], [7, 8, 9]);

console.log(test);