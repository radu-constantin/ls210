function splice(arr, index, max) {
  let result = [];

  for (let counter = 0; counter < max; counter += 1) {
    result.push(arr[index]);
    index += 1;
  }

  return result;
}

let count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
console.log(count);  