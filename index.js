const word = "bat asdsa";

function lastLetters(word) {
  const a = word[word.length - 1];
  const b = word[word.length - 2];
  return a + " " + b;
}

console.log(lastLetters(word));
