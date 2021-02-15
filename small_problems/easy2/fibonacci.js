function findFibonacciIndexByLength(digits) {
  let fibonacci = [1, 1];
  let fibNum;

  while (true) {
    fibNum = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]

    fibonacci.push(fibNum);
    if (numberOfDigits(fibNum) === digits) return fibonacci.length;
  }
}

function numberOfDigits(number) {
  return String(number).length;
}

console.log(findFibonacciIndexByLength(16));