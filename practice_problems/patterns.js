function generatePattern(nStars) {
  rowContent = []
  for(let row = 1; row <= nStars; row += 1){
    rowContent.push(row);
    console.log((rowContent.join('')) + '*'.repeat(nStars - rowContent.length));
  }
}

generatePattern(10)