/* exported numVowels */
/* Parameters
string - any JavaScript String
Return Value
The Number of vowel characters in string.

Examples
numVowels('All Code All Day')             // -> 5
numVowels('HTML, CSS, JavaScript, React') // -> 5
numVowels('React')                        // -> 2
numVowels('Angular')                      // -> 3
numVowels('')                             // -> 0
numVowels('LearningFuze')                 // -> 5
 */

// PSEUDOCODE
// Define a function numVowels that takes a string parameter
// Make a new const with string.toLowerCase()
// Declare a counter variable initiliazed at 0
// Iterate through the string
// If there are AEIOU at string[i], add 1 to the counter variable
// If the string is empty, return 0
// Return the counter variable

function numVowels(string) {
//   return string.toLowerCase().split('').reduce((vowelCount, letter) => {
//     if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
//       vowelCount++;
//     }
//     return vowelCount;
//   }, 0);

  const lowerCaseString = string.toLowerCase();
  let vowels = 0;

  if (string === '') {
    return 0;
  }

  for (let i = 0; i < lowerCaseString.length; i++) {
    if (lowerCaseString[i] === 'a') {
      vowels += 1;
    }
    if (lowerCaseString[i] === 'e') {
      vowels += 1;
    }
    if (lowerCaseString[i] === 'i') {
      vowels += 1;
    }
    if (lowerCaseString[i] === 'o') {
      vowels += 1;
    }
    if (lowerCaseString[i] === 'u') {
      vowels += 1;
    }
  }
  return vowels;
}
