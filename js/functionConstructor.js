// FUNCTION CONSTRUCTOR

/*let Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person.prototype.calculateAge = function() {
  console.log(2019 - this.yearOfBirth)
}

Person.prototype.lastname = 'smith'

let john = new Person('John', 1990, 'Teacher')
let jane = new Person('jane', 1934, 'Retired')
let mark = new Person('Mark', 1990, 'Designer')
let smith = new Person('Smith', 1990, 'Garbage Man')

john.calculateAge()
jane.calculateAge()
mark.calculateAge()
smith.calculateAge()

console.log(john.lastname)*/

// or 

//Object.create()

let personProto = {
  calculateAge: () => {
    console.log(2019 - this.yearOfBirth)
  }
}

let john = Object.create(personProto)
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'Teacher';

let jane = Object.create(personProto,
  {
    name: { value: 'jane' },
    yearOfBirth: { value: 1996 },
    job: { value: 'Designer' }
  })



