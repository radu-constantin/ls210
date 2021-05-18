function isPrime(number) {
  if (number <= 1) return false;

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }S

  return true;
}

console.log(isPrime(0))