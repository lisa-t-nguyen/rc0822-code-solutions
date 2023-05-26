/* exported pick */
function pick(source, keys) { // source = original object and keys/properties, keys = keys/properties to copy into a new object
  const object = {}; // instantiate an empty object to be returned

  for (const key of keys) { // loop through the names of the properties of the keys array
    if (Object.hasOwn(source, key) && source[key] !== undefined) { // if source object has the property key
      object[key] = source[key]; // add property key to new object with value obtained from the same property in source object
    }
  }
  return object; // return newly built object
}
