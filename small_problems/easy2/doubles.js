function isDoubleNum(num) {
  num = String(num);
  let length = num.length;
  let halfPoint = length / 2;
  if (length % 2 !== 0) return false;

  for(let i = 0; i < (length / 2); i += 1) {
    if (num[i] !== num[halfPoint]) return false;
    halfPoint += 1;
  }

  return true;
}

function twice(num) {
  if (isDoubleNum(num)) {
    return num;
  } else {
    return num * 2;
  }
}

console.log(twice(7676));