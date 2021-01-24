function getName(prompt) {
    let rlSynch = require('readline-sync');
    return rlSynch.question(prompt)
}

let firstName = getName(`What is your first name?\n`);
let lastName = getName('What is your last name?\n');
console.log(`Hello, ${firstName} ${lastName}!`);