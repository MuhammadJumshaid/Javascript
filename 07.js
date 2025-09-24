// 20250924 

// String Methods 

// trim()
// toUpperCase()
// toLowerCase()
// slice()



//  1.  trim()

// trim() remove spaces from the left and right of the string
// this will not change the orignal string , it will give a new string
let firstName = "     Jumshaid   khan   "

console.log(firstName.length) // 23

console.log(firstName.trim()) // "     Jumshaid   khan   "
var newString = firstName.trim()

console.log(newString)  // "Jumshaid   khan"
console.log(newString.length) // 15



//  2.   toUpperCase()
// toUpperCase() convert all the letters in a string into uppercase letters
// this will not change the orignal string , it will give a new string


let myName = "JumShaId"
console.log(myName.toUpperCase()) // JUMSHAID
var updatedMyName = myName.toUpperCase()
console.log(updatedMyName)  // JUMSHAID

console.log(myName)  // JumShaId





//  3.   toLowerCase()
// toLowerCase() convert all the letters in a string into lowercase letters
// this will not change the orignal string , it will give a new string




let yourName = "JumShaId"
console.log(yourName.toLocaleLowerCase()) // jumshaid
var updatedYourName = yourName.toLowerCase()
console.log(updatedYourName)  // jumshaid

console.log(yourName)  // JumShaId




// 4.slice()
// slice() gives us a substring from the string 
// this will not change the orignal string , it will give a new string
// start index
// end index (not inclueded in substring)


let testSting = "Jumshaid" // index >> 0 1 2 3 4 5 6 7 

 var newTestString =  testSting.slice(3,7)

console.log(newTestString)  // shai >> index >> 3 4 5 6 

console.log(testSting.slice(1))  // umshaid