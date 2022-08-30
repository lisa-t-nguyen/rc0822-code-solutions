/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  return person.firstName[0] + person.lastName[0];
}

var ada = {
  firstName: 'Ada',
  lastName: 'Lovelace'
};

getInitialsOfPerson(ada);
