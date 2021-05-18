function isXor(first, second) {
  if (!!first === !!second) {
    return false;
  } else return true;
}

console.log(isXor('2', 23));