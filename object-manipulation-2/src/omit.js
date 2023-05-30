/* exported omit */
function omit(source, keys) { // source = original object and keys/properties, keys = keys/properties to not copy into a new object
  const object = {}; // instantiate an empty object to be returned

  for (const key of Object.keys(source)) { // loop through the names of the properties in the source object
    if (!keys.includes(key)) { // if the passed in array includes the property in the source object, don't include it
      object[key] = source[key]; // add a property and value to the new object from the source object
    }
  }
  return object; // return newly built object
}
