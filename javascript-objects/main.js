var student = {
  firstName: 'Lisa',
  lastName: 'Nguyen',
  age: 29
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName', fullName);

student.livesInIrvine = false;

student.previousOccupation = 'School Counselor';

console.log('value of livesInIrvine', student.livesInIrvine);
console.log('value of previousOccupation', student.previousOccupation);

console.log('value of student', student);

var vehicle = {
  make: 'Toyota',
  model: 'Camry',
  year: 2014
};

vehicle['color'] = 'Gray';
vehicle['isConvertible'] = false;

console.log('value of vehiclecolor', vehicle['color']);
console.log('value of vehicleisConvertible', vehicle['isConvertible']);

console.log('value of vehnicle', vehicle);

var pet = {
  name: 'Boopy',
  type: 'Cat'
};

delete pet.name;
delete pet.type;

console.log('value of pet', pet);
