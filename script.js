// Constructor
function Person(name, age) {
	this.name = name;
	this.age = age;
}

// Greet method
Person.prototype.greet = function () {
	console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Employee constructor (inherits Person)
function Employee(name, age, jobTitle) {
	Person.call(this, name, age);
	this.jobTitle = jobTitle;
}

// Inheritance setup
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Job greet method
Employee.prototype.jobGreet = function () {
	console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;