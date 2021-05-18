function gcd (num1, num2) {
  let counter = (num1 < num2) ? num1 : num2;

  while (counter > 0) {
    if (num1 % counter === 0 && num2 % counter === 0) {
      return counter;
    }
    counter -= 1;
  }
}

console.log(gcd(12, 4));