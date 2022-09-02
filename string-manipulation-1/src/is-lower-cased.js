/* exported isLowerCased */
/* exported isUpperCased */
// I am defining a function with isLowerCased with one parameter that is word
// I want to find out if any value being passed through word, is all lowercase
// If it is all lowercase, it will return true, if it is not, it will return false
// Write an if statement indicating if word is strictly equals to word having all lowercase letters
// Return true, if not, return false outside of the code block for the if statement
function isLowerCased(word) {
  if (word === word.toLowerCase()) {
    return true;
  }
  return false;
}
