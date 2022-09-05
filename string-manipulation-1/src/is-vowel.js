/* exported isVowel */
function isVowel(char) {
  var vowel = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
  for (let i = 0; i < vowel.length; i++) {
    if (char.toLowerCase().toUpperCase() === vowel[i]) {
      return true;
    }
  }
  return false;
}
