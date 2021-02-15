function triangle(num) {
  const SPACE = ' ';
  const STAR = '*';

  let numSpaces;
  let numStars;

  for (let i = 1; i <= num; i += 1) {
    numSpaces = num - i;
    numStars = i;
    console.log(`${SPACE.repeat(numSpaces)}${STAR.repeat(numStars)}`)
  }
}

triangle(5);