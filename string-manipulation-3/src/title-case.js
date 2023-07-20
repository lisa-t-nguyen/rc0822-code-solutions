/* exported titleCase */
// RULES:
// 1. JavaScript is always JavaScript
// 2. API is always API
// 3. and, or, nor, but, a, an, the, as, at, by, for, in, of, on, per, to are always lowercase except when:
//    a. They're the first word of the title (beginning of string)
//    b. They're the first word of the subtitle (beginning of after a colon)
// 4. Capitalize all words of four letters or more.
// 5. The second part of a hyphenated word should also be capitalized (Self-Report, not Self-report)

function titleCase(title) {
  const words = title.split(' ');
  const array = [];

  for (let i = 0; i < words.length; i++) {
    const lowerCaseWord = words[i].toLowerCase();
    if (lowerCaseWord === 'javascript') {
      return 'JavaScript';
    }

    if (lowerCaseWord === 'api') {
      return 'API';
    }
  }
  // if (lowerCaseWord[0] === 'and' || 'or' && 'nor' && 'but' && 'a' && 'an' && 'the' && 'as' && 'at' && 'by' && 'for' && 'in' && 'of' && 'on' && 'per' && 'to') {
  //   lowerCaseWord[0][0].toUpperCase();
  // }

  // if (lowerCaseWord[i] !== 'and' && 'or' && 'nor' && 'but' && 'a' && 'an' && 'the' && 'as' && 'at' && 'by' && 'for' && 'in' && 'of' && 'on' && 'per' && 'to') {
  //   lowerCaseWord[i][0].toUpperCase();
  // }

  // condition 1 --> lowerCaseWord[i] !== 'and'
  // condition 2 --> 'or'

  /*
        // condition 1 --> a === b
        // condition 2 --> b === c
        if (a === b && b === c)
    */

  //     if (lowerCaseWord[i] !== 'and' || lowerCaseWord[i] !== 'or')

  //     array.push(lowerCaseWord);
  //   }

  return array;
}
