/* exported isAnagram */
function isAnagram(firstString, secondString) {
  firstString = firstString.replace(' ', '');
  secondString = secondString.replace(' ', '');

  if (firstString.length !== secondString.length) {
    return false;
  }

  const firstMap = new Map();
  const secondMap = new Map();

  for (let i = 0; i < firstString.length; i++) {
    const char = firstString.charAt(i);
    firstMap.set(char, (firstMap.get(char) || 0) + 1);
  }

  for (let i = 0; i < secondString.length; i++) {
    const char = secondString.charAt(i);
    secondMap.set(char, (secondMap.get(char) || 0) + 1);
  }

  if (firstMap.size !== secondMap.size) {
    return false;
  }
  // console.log('secondMapKeys', secondMap.keys());
  // console.log('firstMapKeys', firstMap.keys());
  return false;
}
