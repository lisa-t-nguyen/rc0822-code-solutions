/* exported truncate */
function truncate(length, string) {
  let truncatedString = '';
  truncatedString = string.slice(0, length);
  return truncatedString.concat('...');
}

// OPTIMIZATION

// function truncate(length, string) {
//   return string.slice(0, length).concat('...');
// }
