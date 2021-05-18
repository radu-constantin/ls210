function isPrime(number) {
  if (number <= 1) return false;

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }

  return true;
}

function checkGoldbach(expectedSum) {
  if (expectedSum < 4 || expectedSum % 2 !== 0) {
    console.log('null');
    return;
  }

  for (let i = 2; i < expectedSum; i += 1) {
    if (isPrime(i) !== true) continue;
    for (let x = i; x < expectedSum; x += 1) {
      if (isPrime(x) !== true) continue;
      if (i + x === expectedSum) console.log(`${i} ${x}`)
    }
  }
}

checkGoldbach(3);


