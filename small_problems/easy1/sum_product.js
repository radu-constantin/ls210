let rlSync = require ('readline-sync');

console.log('Please enter an integer greater than 0:');
let num = rlSync.prompt();

console.log('Enter "s" to compute the sum, or "p" to compute the product.')
let operation = rlSync.prompt();

let result;

if (operation === 's') {
  for (let i = 1; i <= num; i += 1) {
    result += i;
  }
} else {
  result = 1;
  for (let i = 1; i <= num; i += 1) {
    result *= i;
  }
}

console.log(`The sum of the integers between 1 and ${num} is ${result}.`)