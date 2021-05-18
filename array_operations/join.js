function join(arr, str) {
  let result = [];

  for(let i = 0; i < arr.length; i += 1) {
    result.push(String(arr[i]));
  }

  return result.join(str);
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));