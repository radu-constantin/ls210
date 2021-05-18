function nthElementOf(arr, index) {
  if (index >= arr.length) {
    return undefined;
  } else if (index < 0) {
    return arr[arr.length + index];
  } else {
    return arr[index];
  }
}


let digits = [4, 8, 15, 16, 23, 42];
console.log(nthElementOf(digits, -1));

