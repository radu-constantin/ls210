let rlSync = require('readline-sync');

let measureType = rlSync.question('What measurement system do you preffer? Feet or meters?\n')

let length = rlSync.question(`Enter the length of the room in ${measureType}:\n`);
let width = rlSync.question(`Enter the width of the room in ${measureType}:\n`);

length = parseFloat(length);
width = parseFloat(width);

if (measureType === 'meters') {
  let mainMeasure = (length * width).toFixed(2);
  let secondaryMeasure = (mainMeasure * 10.7639).toFixed(2);

  console.log(`The area of the room is ${mainMeasure} square meters (${secondaryMeasure} square feet).`);
} else if (measureType === 'feet') {
  let mainMeasure = (length * width).toFixed(2);
  let secondaryMeasure = (mainMeasure * 0.3048);
  console.log(`The area of the room is ${mainMeasure} square feet (${secondaryMeasure} square meters).`)
}
