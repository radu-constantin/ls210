function unshift(arr, value) {
  let length = arr.length
  for (let i = length; i >= 0; i -= 1) {
    arr[i] = arr[i - 1];
  }
  arr[0] = value;
  return arr.length
}

let count = [1, 2, 3];
unshift(count, 5);
console.log(count);