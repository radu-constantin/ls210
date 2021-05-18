function matrixSums(arr) {
  let sum = [];

  for(let i = 0; i < arr.length; i += 1) {
    sum.push(arr[i].reduce((acc, value) => acc + value));
  }

  return sum;
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));