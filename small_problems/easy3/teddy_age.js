let findAge = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let teddyAge = findAge(20, 200)

console.log(`Teddy is ${teddyAge} years old!`);