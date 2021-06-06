function findFibonacciIndexByLength(length) {
  let index = 2n;
  let fibonacci = [1n, 1n]

  while (String(fibonacci[1]).length < length) {
    fibonacci.push(fibonacci.reduce((acc, num) => acc + num));
    fibonacci.shift();
    index += 1n;
  }

  return index;
}

console.log(findFibonacciIndexByLength(2n) === 7n);
console.log(findFibonacciIndexByLength(3n) === 12n);
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);
