const rlSync = require('readline-sync');

const password = 'felix2013'

function checkPass() {
  for(let counter = 1; ;) {
    let answer = rlSync.question('Please enter your password:\n')
    if (counter >= 3) {
      console.log('You have been denied access.')
      break
    } else if(answer === password) {
      console.log("You have successfully logged in")
      break
    }
    counter += 1
  }
}

checkPass()
