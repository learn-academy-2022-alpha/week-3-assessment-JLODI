// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// describe("fibonacciMaker", () => {
//   it("returns an array of numbers of the fibonacchi sequence at the length of that number", () => {
//     expect(fibonacciMaker("some number")).toEqual("fibonacci sequence array at the number length")

// b) Create the function that makes the test pass.
// Pseudo Code:
// declare a function
// set the parameter to a number
// research finboacchi sequence -- the next number is found by adding up the two numbers before it
// [num 1, num2, num3 = num1 + num2, num4 = num2 + num3]
// method to isolate the value of each index
// create a new array at the length of the number input
// start with first 2 numbers as 1, then value will be previous 2 numbers added together
// itterate through array
// return array of fibonacci numbers

let array = [1,1]
const fibonacciMaker = (number) =>   {
   for (let i=2; i<number; i++){
     array[i] = array[i-2] + array[i-1]
   }
   return array
}

describe("fibonacciMaker", () => {
  it("returns an array of numbers of the fibonacchi sequence at the length of that number", () => {
expect(fibonacciMaker(6)).toEqual([1, 1, 2, 3, 5, 8])
expect(fibonacciMaker(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

// describe("oddsOnly", () => {
//   it("returns an array of only odd numbers from least to greatest", () => {
//     expect(oddsOnly("array of numbers")).toEqual("array of only odd numbers in order")

// b) Create the function that makes the test pass.

// Pseudo Code:
// declare a function oddsOnly
// set the parameter to an array
// itterate and filter through the array
// check if a number
// if number, check if odd with modulo
// if odd, include in new array
// if even, omit from new Array
// return sorted new array from least to greatest

const oddsOnly = (array) => {
  let newArray = array.filter(
    value => value % 2 !== 0 && typeof(value) === 'number'
  )
  return newArray.sort(((a,b)=>a-b))
}

describe("oddsOnly", () => {
  it("returns an array of only odd numbers from least to greatest", () => {
    expect(oddsOnly(fullArr1)).toEqual([-9, 7, 9, 199])
    expect(oddsOnly(fullArr2)).toEqual([-823, 7, 23])
  })
})

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

const numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// Expected output: []

// describe("arraySum", () => {
//   it("returns an array, where each number is the accumulating sum of the previous value", () => {
//     expect(arraySum("array")).toEqual("array of accumulating sums")
//   })
// })


// b) Create the function that makes the test pass.

// Pseudo Code:
// declare a function arraySum
// set the parameter to an array
// itterate through array
// declare empty array newArray
// return value of index 0 as is with conditional
// from index 1 onwards, add previous value of newArray and move onto next
// return newArray of values each containing accumulating sum

const arraySum = (array) => {
  let newArray = []
    for(let i=0; i < array.length; i++){
    if(array[i] === array[0]){
      newArray[0] = array[0]
    }
    else{newArray[i] = array[i] + newArray[i-1]}
  }
  return newArray
}


//alternative way with map function
// const arraySum = (array) => {
//   let newArray = []
//     array.map((value, i) => {
//       if(array[i] === array[0]){
//         newArray[0] = array[0]
//       }
//       else {
//         newArray[i] = value + newArray[i-1]
//       }
//     })
//   return newArray
//   }

describe("arraySum", () => {
  it("returns an array, where each number is the accumulating sum of the previous value", () => {
    expect(arraySum(numbersToAdd1)).toEqual([2, 6, 51, 60])
    expect(arraySum(numbersToAdd2)).toEqual([0, 7, -1, 11])
    expect(arraySum(numbersToAdd3)).toEqual([])
  })
})
