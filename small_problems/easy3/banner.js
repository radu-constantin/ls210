function logInBox(message) {
  let topLine = "+" + "-".repeat(message.length + 2) + "+\n";
  let emptyLine = "|" + " ".repeat(message.length + 2) + "|\n";
  let messageLine = "|" + " " + message + " " + "|\n";
  let bottomLine = "+" + "-".repeat(message.length + 2) + "+\n";
  console.log(topLine + emptyLine + messageLine + emptyLine + bottomLine);
}



logInBox('');

// Algorithm:















