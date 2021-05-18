function incrementProperty(object, string) {
  const objectKeys = Object.keys(object);

  if (objectKeys.includes(string)) {
    object[string] += 1;
   } else {
     object[string] = 1;
   }

   return object[string];
}

let wins = {
  steve: 3,
  susie: 4,
};

console.log(incrementProperty(wins, 'susie'));       
console.log(wins);
console.log(incrementProperty(wins, 'lucy'));
console.log(wins);    
     