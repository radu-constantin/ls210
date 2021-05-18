function slice(array, begin, end) {
  let slicedArr = [];
  const length = array.length;

  begin = begin > length ? length : begin;
  end = end > length ? length : end;

  for (let i = begin; i < end; i += 1) {
    slicedArr.push(array[i]);
  }

  return slicedArr;
}

function splice(array, start, deleteCount, ...elements) {
  start = start > array.length ? array.length : start;
  deleteCount = deleteCount > array.length - start - 1 ? array.length - start : deleteCount;
  let deletedElements = slice(array, start, (start + deleteCount));

  for (let i = start; i < array.length; i += 1) {
    array[i] = array[i + deleteCount];
  }

  if (elements.length !== 0) {
    for (let i = 1; i <= elements.length; i += 1) {
      array[array.length] = array[start + 1];
    }
  }

  array.length -= deleteCount;
  return deletedElements
}

const arr = [1, 2, 3];
console.log(splice(arr, 1, 1, 'two'));
console.log(arr);
