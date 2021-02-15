function stringy(limit) {
  let binary = 1;
  let result = ""

  for (let i = 0; i < limit; i += 1) {
    result += binary;
    binary = binary === 1 ? 0 : 1;
  }

  return result;
}

console.log(stringy(7));