/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  // const firstChar = string.charAt(firstIndex);
  // const secondChar = string.charAt(secondIndex);

  // const strArray = string.split('');
  // strArray[firstIndex] = secondChar;
  // strArray[secondIndex] = firstChar;
  // return strArray.join('');

  // string[firstIndex] = secondChar;
  // string[secondIndex] = firstChar;

  // string = 'abcd', firstIndex = 0, secondIndex = 3
  const firstChar = string.slice(firstIndex, firstIndex + 1); // = a
  const secondChar = string.slice(secondIndex, secondIndex + 1); // = d
  const firstString = string.slice(0, firstIndex);
  const middleString = string.slice(firstIndex + 1, secondIndex); // = 'bc'
  const lastString = string.slice(secondIndex + 1, string.length); // = ''

  return firstString + secondChar + middleString + firstChar + lastString;

  // "HTML, CSS, JavaScript, React"
  // firstChar = J
  // secondChar = R
  // firstString = "HTML, CSS, "
  // middleString = "avaScript, ""
  // lastString = "eact"
  // "HTML, CSS, RavaScript, Jeact" = firstString + secondChar + middleString + firstChar + lastString

  // "React"
  // firstChar = R
  // secondChar = t
  // firstString = ""
  // middleString = "eac"
  // lastString = ""
  // "teacr" = secondChar + middleString + firstChar

  // console.log('first char', firstChar);
  // console.log('second char', secondChar);
}
