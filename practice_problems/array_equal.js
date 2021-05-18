function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) return false;

  const sortedArr1 = array1.slice(0, array1.length).sort();
  const sortedArr2 = array2.slice(0, array2.length).sort();
  for (let i = 0; i < array1.length; i += 1) {
    if (sortedArr1[i] !== sortedArr2[i]) {
      return false;
    }
  }

  return true;
}

let arr1 = ['a', 'b', 'c'];
let arr2 = ['b', 'c', 'a'];

console.log(areArraysEqual(arr1, arr2));