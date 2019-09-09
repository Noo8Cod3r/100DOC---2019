// FUNCTION CONSTRUCTOR


let Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
  this.calculateAge = () => {
    console.log(2019 - this.yearOfBirth)
  }
}

let john = new Person('John', 1990, 'Teacher')

john.calculateAge()