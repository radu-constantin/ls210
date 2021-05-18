function reverse(arr) {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    result.push(arr[i]);
  }

  return result;
}

let array = [1, 2, 3, 4, 5];
console.log(reverse(array));