let rlsync = require("readline-sync");
console.log('Please enter a phrase:\n')
let phrase = rlsync.prompt();
console.log(`There are ${phrase.length} characters in "${phrase}"`)