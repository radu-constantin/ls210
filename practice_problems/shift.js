function shift(arr) {
  let shiftedElement = arr[0]
  for(let i = 0; i < arr.length; i += 1) {
    arr[i] = arr[i + 1];
  }

  if (arr.length > 1) arr.length -= 1;
  return shiftedElement;
}

function unshift(arr) {
  let unshiftedElement = arr.slice(-1);
  for(let i = arr.length; i >= 0; i -= 1) {
    arr[i] = arr[i - 1];
  }

  if (arr.length > 1) arr.length -= 1;
  return unshiftedElement;
}

console.log(unshift([1, 2, 3], 5, 6));