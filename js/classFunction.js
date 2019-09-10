// First-Class Functions

// Passing Function as arguments

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

let ages = arrayCalc(years, calculateAge)
let fullAge = arrayCalc(ages, isFullAge)

console.log(ages)     // [26, 51, 79, 11, 18]
console.log(fullAge)  //  [true, true, true, false, true]