/* exported getFullNameOfPerson */
function getFullNameOfPerson(person) {
  return person.firstName + ' ' + person.lastName;
}

getFullNameOfPerson({ firstName: 'Ada', lastName: 'Lovelace' });
