function uniqueElements(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (result.includes(arr[i])) continue;
    result.push(arr[i]);
  }

  return result;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));