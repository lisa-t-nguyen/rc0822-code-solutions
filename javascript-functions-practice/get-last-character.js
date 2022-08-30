/* exported getLastCharacter */
function getLastCharacter(string) {
  var text = string.length - 1;
  var character = string[text];
  return character;
}

getLastCharacter('foo');
