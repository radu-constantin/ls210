function multisum(num) {
  let sum = 0;
  for (i = 1; i <= num; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(multisum(1000));