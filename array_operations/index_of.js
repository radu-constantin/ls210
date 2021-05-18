function indexOf(arr, value) {
  let lastIndex;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === value) lastIndex = i;
  }

  return lastIndex ? lastIndex : -1;
}

console.log(indexOf([1, 2, 3, 3], 3));
console.log(indexOf([1, 2, 3], 4));