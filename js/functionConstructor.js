// FUNCTION CONSTRUCTOR


let Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person.prototype.calculateAge = function() {
  console.log(2019 - this.yearOfBirth)
}

let john = new Person('John', 1990, 'Teacher')
let jane = new Person('jane', 1934, 'Retired')
let mark = new Person('Mark', 1990, 'Designer')
let smith = new Person('Smith', 1990, 'Garbage Man')

john.calculateAge()
jane.calculateAge()
mark.calculateAge()
smith.calculateAge()