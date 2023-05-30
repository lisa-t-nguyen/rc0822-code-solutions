/* exported invert */
function invert(source) {
  const object = {};

  for (const key in source) {
    const newKey = source[key];
    const newValue = key;
    object[newKey] = newValue;
  }

  return object;
}
