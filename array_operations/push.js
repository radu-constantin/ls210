function push(array, element) {
  array[array.length] = element;
  return array.length
}

let arr = [1, 2, 3];

console.log(push(arr, 4));