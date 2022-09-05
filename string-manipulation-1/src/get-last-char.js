/* exported getLastChar */
// this function is being defined with getLastChar and is being called with
// one parameter that is string. In the function's code block, I want to return
// the last character of any value that is being passed through the parameter string
// doing that, I will use the charAt method for the length property of the string object - 1
// since this will give me the very last index of that string

function getLastChar(string) {
  return string.charAt([string.length - 1]);
}
