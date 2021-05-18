function objectHasProperty(object, string) {
  const objectKeys = Object.keys(object);

  if (objectKeys.includes(string)) {
    return true;
   } else {
     return false;
   }
}

let pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

console.log(objectHasProperty(pets, 'dog'));       // true
console.log(objectHasProperty(pets, 'lizard'));    // false
console.log(objectHasProperty(pets, 'mice'));      // true