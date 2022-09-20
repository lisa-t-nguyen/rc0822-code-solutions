function ExampleConstructor() {

}

console.log('value of function:', ExampleConstructor);
console.log('type of function:', typeof ExampleConstructor);

var newExampleConstructor = new ExampleConstructor();

console.log(newExampleConstructor);

var instanceOfConstructor = newExampleConstructor instanceof ExampleConstructor;

console.log('instance of:', instanceOfConstructor);
