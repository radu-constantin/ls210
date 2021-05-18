const rlSync = require('readline-sync')

function getScores() {
  let scores = []
  while (true) {
    score = Number(rlSync.question('Enter your score:\n'));
    scores.push(score);
    continuePrompt = rlSync.question('Do you want to add another score?\n');
    if (continuePrompt === 'no') break
  }
  return scores;
}

function averageScore(array) {
  let sum = array.reduce((total, score) => total + score, 0);
  let average = sum / array.length;
  return average;
}

function gradeCalculator(score) {
  let letterScore;
  if (score >= 90) {
    letterScore = 'A';
  } else if (score >= 70) {
    letterScore = 'B';
  } else if (score >= 50) {
    letterScore = 'C';
  } else if (score < 50) {
    letterScore = 'F';
  }
  return letterScore;
}

function showGrade() {
  let grade = gradeCalculator(averageScore(getScores()));
  console.log(`Based on the average of your scores your letter grade is "${grade}".`)
}

showGrade()




/*
let score = Number(rlSync.question('Enter your score:\n'));


let average = (score1 + score2 + score3) / 3;
let letterScore; 

if (average >= 90) {
  letterScore = 'A';
} else if (average >= 70) {
  letterScore = 'B';
} else if (average >= 50) {
  letterScore = 'C';
} else if (average < 50) {
  letterScore = 'F';
}

console.log(`Based on the average of your 3 scores your letter grade is "${letterScore}".`) */
