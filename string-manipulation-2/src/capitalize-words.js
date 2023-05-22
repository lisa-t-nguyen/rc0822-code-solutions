/* exported capitalizeWords */
/* PSEUDOCODE
    1. Make a new string lowercaseString and set it equal to the passed in string.toLowercase()
    2. Split the string into an array of strings by spaces (' ')
    3. Make a new string to build my string to be returned
    4. Loop through this new array and slice the first letter out of each word
    5. Make that letter uppercase
    6. Add this uppercase word to a new string
    7. Return the built string
*/

function capitalizeWords(string) {
  const lowercaseString = string.toLowerCase(); // 1. Make a new string lowercaseString and set it equal to the passed in string.toLowercase()
  const words = lowercaseString.split(' '); // 2. Split the new string into an array of strings by spaces (' ')

  let capitalizedString = ''; // 3. Make a new string to build my string to be returned
  for (const word of words) { // 4. Loop through this new array and slice the first letter out of each word
    const firstLetter = word.slice(0, 1).toUpperCase(); // 5. Make that letter uppercase
    const remainingLetters = word.slice(1, word.length);

    capitalizedString += firstLetter + remainingLetters + ' '; // 6. Add this uppercase word to a new string
  }

  return capitalizedString.trim(); // 7. Return the built string trimming the extra space at the end
}

/*
    Parameters
        string - any JavaScript String
    Return Value
        Returns string with every word capitalized.
    Examples
        capitalizeWords('needs solution')
        // -> "Needs Solution"
        capitalizeWords('Add string manipulation practice.')
        // -> "Add String Manipulation Practice."
        capitalizeWords('aLl CoDe aLl DaY')
        // -> "All Code All Day"
        capitalizeWords('HTML, CSS, JavaScript, PHP, SQL')
        // -> "Html, Css, Javascript, Php, Sql"
*/
