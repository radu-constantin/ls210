function logMultiples(number) {
  let largestMultiple = Math.floor(100 / number) * number
  for(counter = largestMultiple; counter > 0; counter -= number) {
    if (counter % 2 !== 0) console.log(counter);
  }
}

logMultiples(17)