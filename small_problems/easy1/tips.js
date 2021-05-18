let rlSync = require('readline-sync')

let bill = rlSync.question('What is the bill?\n');
let tipPercentage = rlSync.question('What is the tip percentage?\n');

let tip = parseFloat(bill) * (parseFloat(tipPercentage) / 100);
tip = tip.toFixed(2);
let total = (parseFloat(bill) + tip).toFixed(2);

console.log(`The tip is $${tip}`);
console.log(`The total is $${total}`);