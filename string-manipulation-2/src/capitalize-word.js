/* exported capitalizeWord */
function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }
  const firstLetter = word.slice(0, 1);
  const afterFirstLetter = word.slice(1, word.length);

  return firstLetter.toUpperCase().concat(afterFirstLetter.toLowerCase());
}
