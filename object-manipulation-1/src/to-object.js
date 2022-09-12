/* exported toObject */
// for (const key of keyValuePair) {
//   var object = {};
//   object = key + ': ';
//   console.log(object);
// }
// // var object = {};
// // keyValuePair.forEach(function (e) {
// //   object[e[0]] = [e];
// // });
// // return object;
// var splice = keyValuePair.splice(0, 2);
// console.log(splice);
// var object = {};
// var splice1 = splice[0];
// var splice2 = splice.at(1);
// object = splice1 + ': ' + splice2;
// console.log(object);
// above is all the code I tried executing for this algorithm
// first step is to define the function toObject with one parameter, keyValuePair
// assign an empty object to a variable
// on the next line, set the variable at [parameter[0]] and that is equal to parameter[1]
// return variable that is empty object
function toObject(keyValuePair) {
  var object = {};
  object[keyValuePair[0]] = keyValuePair[1];
  return object;
}
