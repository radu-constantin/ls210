function pop(array) {
  let last = array.slice(-1);
  array.length -= 1
  return last;
}

let count = [1, 2, 3];
console.log(pop(count));
console.log(count);