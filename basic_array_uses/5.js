function firstNOf(arr, count) {
  let result = [];
  for (let index = arr.length - 1; count > 0; count -= 1) {
    result.push(arr[index])
    index -= 1;
  }

  return result;
}

let digits = [4, 8, 15, 16, 23, 42];
console.log(firstNOf(digits, 3)); 