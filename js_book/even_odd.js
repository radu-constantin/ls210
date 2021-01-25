function evenOrOdd (number) {
    if (!Number.isInteger(number)) {
        console.log("Number is not an integer");
        return
    }
    else if(number % 2 === 0) {
        console.log("even");
    }   else {
        console.log("odd");
    }
}

evenOrOdd("string")