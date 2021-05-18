function copyProperties(obj1, obj2) {
  let counter = 0
  for (key in obj1) {
    obj2[key] = obj1[key];
    counter += 1;
  }

  return counter;
}

let hal = {
  model: 9000,
  enabled: true,
}

let sal = {};
console.log(copyProperties(hal, sal));
console.log(sal);