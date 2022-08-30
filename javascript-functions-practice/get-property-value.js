/* exported getPropertyValue */
function getPropertyValue(potato, tomato) {
  return potato[tomato];
}

var ada = {
  name: 'Ada Lovelace',
  occupation: 'countess',
  birthPlace: 'London, England'
};

getPropertyValue(ada, 'birthPlace');
