/* exported capitalize */
function capitalize(word) {
  var upperCase = word.toUpperCase();
  var upperUpperCase = upperCase[0];
  var lowerCase = word.slice(1);
  var lowerLowerCase = lowerCase.toLowerCase();
  var wordy = upperUpperCase + lowerLowerCase;
  return wordy;
}
