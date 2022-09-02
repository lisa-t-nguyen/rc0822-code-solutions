/* exported reverseWord */
function reverseWord(word) {
  var string = '';
  for (let i = word.length - 1; i >= 0; i--) {
    string = string + word[i];
  }
  return string;
}
