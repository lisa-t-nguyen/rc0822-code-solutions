/* exported reverseWords */

// Split each string at ' '
// Reverse each string that have been split
// Put them back together by concatenating each string in order
// Return new string

function reverseWords(string) {
  const stringArray = string.split(' ');
  let newerString = '';

  for (let i = 0; i < stringArray.length; i++) {
    newerString = newerString + reverseString(stringArray[i]) + ' ';
  }

  return newerString.trimEnd();
}

function reverseString(string) {
  let newString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    newString = newString + string[i];
  }

  return newString;
}
