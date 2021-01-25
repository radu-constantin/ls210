function numberCheck(number) {
    if (number < 0) {
        console.log(`${number} is less than 0`)
    } else if ((number >= 0) && (number <= 50) ) {
        console.log(`${number} is between 0 and 50`)
    } else if ((number >= 51) && (number <= 100) ) {
        console.log(`${number} is between 51 and 100`)
    } else {
        console.log (`${number} is greater than 100`)
    }
}

numberCheck(0)
numberCheck(51)
numberCheck(121)
numberCheck(-2)