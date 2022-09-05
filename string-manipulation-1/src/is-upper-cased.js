/* exported isUpperCased */
// I am defining a function with isUpperCased with one parameter that is word
// I want to find out if any value being passed through word, is all capitalized
// If it is all caps, it will return true, if it is not, it will return false
// Write an if statement indicating if word is strictly equals to word having all caps
// Return true, if not, return false outside of the code block for the if statement
function isUpperCased(word) {
  if (word === word.toUpperCase()) {
    return true;
  }
  return false;
}
