// 20251030 

// Rest Parameters


// function myFun(a,b,c){
// console.log(`value of a is ${a}`) // 5
// console.log(`value of b is ${b}`) // 6
// console.log(`value of c is ${c}`) // 7
// }

// myFun(5,6,7)



// function myFun(a,b,c){
// console.log(`value of a is ${a}`) // 5
// console.log(`value of b is ${b}`) // 6
// console.log(`value of c is ${c}`) // 7
// }

// myFun(5,6,7,8,1,2,4,7)





// function myFun(a,b,...c){
// console.log(`value of a is ${a}`) // 5
// console.log(`value of b is ${b}`) // 6
// console.log(`value of c is ${c}`) // value of c is 7,8,1,2,4,7
// console.log(c) //  [7, 8, 1, 2, 4, 7]
// }

// myFun(5,6,7,8,1,2,4,7)



// function sumOfArg(...numbers){
// console.log(numbers)
// console.log(typeof numbers) // object
// console.log(Array.isArray(numbers)) // true
// }

// sumOfArg(4,5,7,9)

// Task sum of all the arguments 


// let total = 0;
// for(let i = 0 ; i <= 10 ; i ++){
//     total = total + i;
// }
// console.log(total)



// function sumOfArg(...numbers){
// let total = 0;
// for(let number=0 ; number<numbers.length; number++){
//     total = total + number
// }
// return total
// }

// let result =  sumOfArg(4,5,7,9)
// console.log(result)

// Explaination  

// total = 0 + 0  -> 0
// total = 0 + 1  -> 1
// total = 1 + 2  -> 3
// total = 3 + 3  -> 6





// function sumOfArg(...numbers){
// let total = 0;
// for(let number=0 ; number<numbers.length; number++){
//     total = total + numbers[number]
// }
// return total
// }

// let result =  sumOfArg(4,5,7,9) // 25
// console.log(result)


// function sumOfArg(...numbers){
// let total = 0;
// for(let i=0 ; i<numbers.length; i++){
//     // total = total + numbers[i]
//     total += numbers[i]

// }
// return total
// }

// let result =  sumOfArg(4,5,7,9) // 25
// console.log(result)


// using for of loop 

function sumOfArg(...numbers){
let total = 0;
for(number of numbers){
total = total + number
}
return total
}

let result =  sumOfArg(4,5,7,9) // 25
console.log(result)


