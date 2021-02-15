function logInBox(string) {
  let length = string.length;

  let border = `+-${'-'.repeat(length)}-+`;
  let padding = `| ${' '.repeat(length)} |`;
  let text = `| ${string} |`;

  console.log(border);
  console.log(padding);
  console.log(text);
  console.log(padding);
  console.log(border);
}


logInBox('To boldly go where no one has gone before.');