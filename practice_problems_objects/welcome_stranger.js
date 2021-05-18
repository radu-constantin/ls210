function greetings (array, object) {
  let name = array.join(' ');
  let title = object.title;
  let occupation = object.occupation;

  console.log(`Hello, ${name}! Nice to have a ${title} ${occupation} around.`)
}

greetings(['Radu', 'Adrian', 'Constantin'], {title: 'Master', occupation: 'Programmer'});