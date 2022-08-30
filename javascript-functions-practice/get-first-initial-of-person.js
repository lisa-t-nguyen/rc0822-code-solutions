/* exported getFirstInitialOfPerson */
function getFirstInitialOfPerson(person) {
  return person.firstName[0];
}

var ada = {
  firstName: 'Ada',
  lastName: 'Lovelace'
};

getFirstInitialOfPerson(ada);
