function multiply () {
    let rlSync = require('readline-sync');

    let firstNum = Number(rlSync.question("Enter the first number:\n"));
    let secondNum = Number(rlSync.question("Enter the second number:\n"));

    let result = firstNum * secondNum;

    console.log(`${firstNum} * ${secondNum} = ${result}`)
}

multiply ()