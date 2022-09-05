/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  return person.name + ' is a ' + person.occupation + ' from ' + person.birthPlace + '.';
}

var ada = {
  name: 'Ada Lovelace',
  occupation: 'Countess',
  birthPlace: 'London, England'
};

getDescriptionOfPerson(ada);
