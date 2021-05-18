function arrayToString(arr) {
  let result = '';
  for (let i = 0; i < arr.length; i += 1) {
    result += arr[i];
  }

  return result;
}

let array = [1, 2, 3, 4, 5, 'miau'];
console.log(arrayToString(array));