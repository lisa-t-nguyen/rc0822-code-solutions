/* exported ransomCase */
// 1. Make everything lowercase
// 2. Declare an empty string in a new variable
// 3. Iterate through the lowercase string
// 4. If the index of the string is odd, make it toUpperCase and add back to empty string
// 5. Otherwise, keep it to lowercase and add back to emptry string
// 6. Return the empty string

function ransomCase(string) {
  const lowerCaseString = string.toLowerCase(); // 1. Make everything lowercase
  let emptyString = ''; // 2. Declare an empty string in a new variable
  for (let i = 0; i < lowerCaseString.length; i++) { // 3. Iterate through the lowercase string
    if (i % 2 === 1) { // 4. If the index of the string is odd, make it toUpperCase and add back to empty string
      emptyString += lowerCaseString[i].toUpperCase();
    } else {
      emptyString += lowerCaseString[i]; // 5. Otherwise, keep it to lowercase and add back to emptry string
    }
  }
  return emptyString;
}
