/*
function logOddNumbers(endNum) {
  for (i = 1; ; i += 2) {
    console.log(i);
    if (i === endNum) break;
  }
}

logOddNumbers(19) */

function logOddNumbers(endNum) {
  for (i = 1; i <= endNum ; i += 2) {
    if (i % 2 === 0) continue;
    console.log(i)
  }
}

logOddNumbers(19)

