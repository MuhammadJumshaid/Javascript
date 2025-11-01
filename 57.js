// 20251101 

// Map method >> Same as foreach map method take a callback function as input
// Unlike forEach map method will give us a new array


// const myArr = [4,6,2,7,3,8];

// function square(number){
// return number * number
// }

// console.log(square(12)) // 144



// const myArr = [4,6,2,7,3,8];

// function square(number){
// return number * number
// }

// const result =   myArr.map(square)
// console.log(result) // [16, 36, 4, 49, 9, 64]





// const myArr = [4,6,2,7,3,8];

// const square =  function(number){
// return number * number
// }

// const result =   myArr.map(square)
// console.log(result) // [16, 36, 4, 49, 9, 64]



// const myArr = [4,6,2,7,3,8];

// const square =  function(number){
//  console.log(number * number)
// }
// const result =   myArr.map(square)
// console.log(result) // [undefined, undefined, undefined, undefined, undefined, undefined]

// Note >> it is crucial we should return in the callback function (instead of console)
// If a function is not returning any thing then undefined is its by default return



// Now instead of separate function 

//const myArr = [4,6,2,7,3,8];


// const result =   myArr.map(function(number){
// return number * number
// })
// console.log(result) //  [16, 36, 4, 49, 9, 64]


// const myArr = [4,6,2,7,3,8];


// const result =   myArr.map((number)=>{
// return number * number
// })
// console.log(result) //  [16, 36, 4, 49, 9, 64]


// if a fuction is taking only single parameeter you can skip it braces

// const myArr = [4,6,2,7,3,8];


// const result =   myArr.map(number=>{
// return number * number
// })
// console.log(result) //  [16, 36, 4, 49, 9, 64]


// in short

// const myArr = [4,6,2,7,3,8];


// const result =   myArr.map(number=> number * number)
// console.log(result) //  [16, 36, 4, 49, 9, 64]


// if we have more than one parameters then () are necessary
//  const myArr = [4,6,2,7,3,8];

// const result =   myArr.map((number, index)=>{
// return (`index : ${index} , Square of No : ${number * number}`)
// })
// console.log(result) //  ['index : 0 , Square of No : 16', 'index : 1 , Square of No : 36', 'index : 2 , Square of No : 4', 'index : 3 , Square of No : 49', 'index : 4 , Square of No : 9', 'index : 5 , Square of No : 64']

//  const myArr = [4,6,2,7,3,8];

// const result =   myArr.map((number, index)=>{
// return index
// })
// console.log(result)  // ) [0, 1, 2, 3, 4, 5]




// Realt time example 


const users = [

    {firstName : "Jimi", age : 23},
    {firstName : "Jumshaid", age : 24},
    {firstName : "Aqib", age : 12},
    {firstName : "Jameel", age : 26},
]


const firstNames = users.map((i)=>{
return i.firstName
})
console.log(firstNames) // ['Jimi', 'Jumshaid', 'Aqib', 'Jameel']s