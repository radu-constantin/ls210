function pop(array) {
  let length = array.length;
  if (array.length === 0) return undefined;
  let lastElement = array[length - 1];

  array.length -= 1;
  return lastElement;
}

function push(array, ...elements) {
  for (let i = 0; i < elements.length; i += 1) {
    array[array.length] = elements[i];
  }

  return array.length;
}

const array2 = [1, 2, 3];
console.log(push(array2, 4, 5, 6));              // 6
console.log(array2);                // [1, 2, 3, 4, 5, 6]
console.log(push([1, 2], ['a', 'b']));          // 3
console.log(push([], 1));                       // 1
console.log(push([]));                          // 0