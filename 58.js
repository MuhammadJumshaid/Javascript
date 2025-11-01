// 20251101 

// Filter Method (Function)
// the callback function(method) of Filter method should retun a value in true or false

// const myArr = [2,6,3,8,1,10]


// const isEven = function(number){
//     return number % 2 === 0
// }
// const result =  myArr.filter(isEven)
// console.log(result) // [2, 6, 8, 10]



// const myArr = [2,6,3,8,1,10]


// const isOdd = function(number){
//     // return number % 2 === 1
//     return number % 2 != 0
// }
// const result =  myArr.filter(isOdd)
// console.log(result) //[3, 1]




const myArr = [2,6,3,8,1,10]



const evenNumbers =  myArr.filter((num)=>{
    return num%2==0
})
console.log(evenNumbers) // [2, 6, 8, 10]