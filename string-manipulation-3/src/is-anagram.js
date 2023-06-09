/* exported isAnagram */
function isAnagram(firstString, secondString) { // function checks if two strings are anagrams of each other
  firstString = firstString.replaceAll(' ', ''); // replace all spaces with no space in firstString
  secondString = secondString.replaceAll(' ', ''); // replace all spaces with no space in secondString

  if (firstString.length !== secondString.length) { // if the length of both strings are not equal, then they are not anagrams.
    return false;
  }

  const firstMap = new Map(); // instantiate new map for firstString to hold the count of each character
  const secondMap = new Map(); // instantiate new map for secondString to hold the count of each character

  for (let i = 0; i < firstString.length; i++) { // loop through the first string's characters
    const char = firstString.charAt(i); // set char to the character at i

    if (firstMap.get(char) !== undefined) { // if this character is in the map already
      firstMap.set(char, firstMap.get(char) + 1); // then increment the existing count by 1
    } else { // otherwise
      firstMap.set(char, 1); // add that character to the map with a value of 1
    }
  }

  for (let i = 0; i < secondString.length; i++) { // repeat the same as the previous loop for the secondString
    const char = secondString.charAt(i);

    if (secondMap.get(char) !== undefined) {
      secondMap.set(char, secondMap.get(char) + 1);
    } else {
      secondMap.set(char, 1);
    }
  }

  if (firstMap.size !== secondMap.size) { // if the firstMap's size is not equal to the secondMap's size, then return false.
    return false; // they are not anagrams because they have a different number of unique characters
  }

  for (const key of firstMap.keys()) { // loop through the firstMap's keys
    if (secondMap.get(key) !== firstMap.get(key)) { // if the secondMap's value is different than the firstMap's value for the same key, then return false.
      return false; // they are not anagrams because there is a mismatch in key-pair values, AKA that character has a different count
    }
  }

  return true; // it is an anagram
}
