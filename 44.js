// 20251026 

// Function

// console.log("How are you");
// console.log("How are you");
// console.log("How are you");
// console.log("How are you");
// console.log("How are you");
// console.log("How are you");

// function Hi(){
//   return  console.log("How are you");
// }
// Hi()
// Hi()
// Hi()
// Hi()
// Hi()


// function sum(){
//     console.log(2+4);
// }

// sum() // 6

// function sum(){
//     return 2+4
// }
// sum() // nothing in the console

// function sum(){
//     return 2+4
// }
// console.log(sum()); // 6


// or 
// function sum(){
//     return 2+4
// }
// let value = sum()
// console.log(value); // 


// Function with parameters 
//  Parameters are the variables passed in the function when it is declared (initialized)
// Argumetns are the value passed to the variables(parameters) when calling(running, invoking a function


// function sum(number1, number2){
//     return number1 + number2 
// }
// let value = sum(5 , 8)
// console.log(value); // 13



// function sum(number1, number2){
//     return number1 + number2 
// }
// let value = sum()
// console.log(value); // NaN
// console.log(undefined + undefined) // NaN


// Take three numbers and return the sum of three numbers 

// function sumThreeNumbers(number1, number2, number3){
//     return number1 + number2 + number3
// }
// let value = sumThreeNumbers(3, 6, 234) // 
// console.log(value); // 243




// function sumThreeNumbers(number1, number2, number3){
//     return number1 + number2 + number3
// }
// let value = sumThreeNumbers(3, 6 ) 
// console.log(value); //  NaN

// console.log(2 + 3 + undefined) // NaN
 

// Task  >> 
// isEven (Even or Odd)
// input : a number 
// Output : true , flase 

// Solution 


// function isEven(number){
//     if(number%2 == 0){
//         return true
//     }
    
//     else{
//          return false
//         }
// }


// console.log(isEven(3)) // Faske 
// console.log(isEven(2)) // Faske 


// or 

// function isEven(number){
//     if(number%2 == 0){
//         return true
//     }
//          return false
// }

// console.log(isEven(3)) // Faske 
// console.log(isEven(2)) // Faske 


// or 

// console.log(12%2 === 0 ) // true
// console.log(11 % 2 === 0 ) // false

// function isEven(number){
//   return  number%2 == 0
// }

// console.log(isEven(3)) // Faske 
// console.log(isEven(2)) // Faske 



// Task 
// function 
// input : string 
// output : first Character 


// function anyString(str){
//  console.log(str[0])
// }
// anyString("Muhammad")

// function anyString(str){
//  return str[0]
// }
// console.log( anyString("Muhammad"))


// function ArrFun(arr, target){
//  return arr.includes(target)
// }

//  console.log( ArrFun([4,6,7,8,], 6))

// Task 

// function 
// input : Array , target Number
// output  find the index of target Number present in array and return that number if  not found return -1

function ArrFun(arr, target){
for (let i = 0 ; i < arr.length ; i++){
    if(arr[i] === target){
        return i
    }
}
return -1
}

const arr = [4,6,7,8,]
 console.log( ArrFun(arr, 6)) // 1 
 console.log( ArrFun(arr, 8)) // 3
 console.log( ArrFun(arr, 12)) // -1
// or 
//  console.log( ArrFun([4,6,7,8,], 6)) // 1 
//  console.log( ArrFun([4,6,7,8,], 8)) // 3
//  console.log( ArrFun([4,6,7,8,], 12)) // -1