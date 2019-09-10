// First-Class Functions

// Passing Function as arguments
/*
let years = [1990, 1965, 1937, 2005, 1998]

const arrayCalc = (arr, fn) => {
  let arrRes = []
  for(var i =0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]))
  }
  return arrRes
}

// Callback Function

const calculateAge = (el) => {
  return 2016 - el
}

const isFullAge = (el) => {
  return el >= 18
}

const maxHeartRate = (el) => {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - (0.67 * el))
  } else {
    return -1
  }
}


// Calling Funcions
let ages = arrayCalc(years, calculateAge)
let fullAge = arrayCalc(ages, isFullAge)
let rates = arrayCalc(ages, maxHeartRate)


// Console Log 
console.log(ages)     // [26, 51, 79, 11, 18]
console.log(fullAge)  //  [true, true, true, false, true]
console.log(rates)    // [189, 173, 154, -1, 195]
*/

// FUNCTIONS RETURNING FUNCTIONS
/*
const interviewQuestion = (job) => {
  if (job === 'Designer') {
    return name => {
      console.log(`${name}, can you explain what UX design is ?`)
    }
  } else if (job === 'Teacher') {
    return name => {
      console.log(`What subject do you teach, ${name}?`)
    }
  } else {
    return name => {
      console.log(`What do you do teach,${name}`)
    }
  }
}

let teacherQuestion = interviewQuestion('Teacher')
let designerQuestion = interviewQuestion('Designer')

teacherQuestion('john')
designerQuestion('John')

*/
  ///////////////////////////////////////////////////
 // IMMIDIATLY INVOKED FUNCTION EXPRESSIONS (IIFE)//
///////////////////////////////////////////////////
/*
 ( () => {
    let score = Math.random() * 10
    console.log(score >= 5)
   }
 )()
 */

  ///////////////////////////////////////////////////
 ////////////////// CLOSURES ///////////////////////
///////////////////////////////////////////////////

const retirement = (retirementAge) => {
  let a = ' Years left until retirement'
  return (yearOfBirth) => {
    let age = 2019 - yearOfBirth
    console.log(retirementAge - age + a)
  }
}

let retirementUS = retirement(66)

retirementUS(1984)
