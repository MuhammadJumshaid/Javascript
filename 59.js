// 20251102 

// const { useReducer } = require("react")

// Reduce Method

// const myArr = [6,7,3,2,7,1]

// Task >> Sum of all the numbers in the given array 

// With For Loop 


// let total = 0;

// for(let i =0 ; i<myArr.length; i++){
// total = total + myArr[i]
// }
// console.log(total) // 26


// With While Loop 

// let total = 0;
// let i = 0;
// while(i<myArr.length){
//     total = total + myArr[i]
//     i++;
// }
// console.log(total) // 26
// console.log("hi")


// Now with Array Reduce method 

// const result =  myArr.reduce((a, b)=> a+b)
// console.log(result) // 26 


// const sum = function(accumulator, currentValue){
// return accumulator + currentValue ;
// }

// const result = myArr.reduce(sum)
// console.log(result) // 26





// const result = myArr.reduce((accumulator , currentValue)=>{
// return accumulator + currentValue
// })
// console.log(result) // 26


//     accumulator      currentValue    return 
//         6                7             13
//         13               3             16
//         16               2             18
//         18               7             25
//         25               1              7


// We can also proved the initial value of accumulator , if we don't provide the initial value , it value will be the first element of array



// const result = myArr.reduce((accumulator , currentValue)=>{
// return accumulator + currentValue
// }, 50)
// console.log(result) // 76


// const result = myArr.reduce((accumulator , currentValue)=>{
// return accumulator + currentValue
// }, 0)
// console.log(result) // 26

// const result = myArr.reduce((accumulator , currentValue)=>{
// return accumulator + currentValue
// }, 24)
// console.log(result) // 50




// Realistic Example 

const userCart = [

    {ProductId : 1, ProductName : "Mobile", Price : 15000},
    {ProductId : 2, ProductName : "Laptop", Price : 30000},
    {ProductId : 3, ProductName : "Tv", Price : 10000},
]

// Task >> Give the total price of the userCart

const totalAmount =  userCart.reduce((totalPrice, currentProduct)=>{
return totalPrice + currentProduct.Price ;
},0)
console.log(totalAmount) 


//    totalPrice           currentProduct             return 
//       0                     {}                      15000
//      15000                  30000                   45000
//      45000                  10000                   55000

