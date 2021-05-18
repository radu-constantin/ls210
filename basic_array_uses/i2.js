function mirroredArray(arr) {
 let result = arr;

 for (let i = arr.length - 1; i >= 0; i -= 1) {
   result.push(arr[i]);
 }

 return result;
}

let array = [1, 2, 3];
console.log(mirroredArray(array));