function getGrade(grade1, grade2, grade3) {
  let average = (grade1 + grade2 + grade3) / 3;

  if (average < 60) {
    return 'F';
  } else if (average < 70) {
    return 'D';
  } else if (average < 80) {
    return 'D';
  } else if (average < 90) {
    return 'B';
  } else return 'A';
}

console.log(getGrade(50, 50, 95));