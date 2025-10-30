// 20251030 

// Callback Functions 
// Take a function as a parameter and call it >> this is callback function 


// value of a can be a number 
// function myFun(a){
//  return a
// }
//  let result =  myFun(4)
//  console.log(result) // 4


// // value of a can be a string 

// function myFun(a){
//  return a
// }
//  let result =  myFun("Jumshaid")
//  console.log(result) // Jumshaid




// value of a can be a an array 

// function myFun(a){
//  return a
// }
//  let result =  myFun([5,7,8,3,3])
//  console.log(result) // [5, 7, 8, 3, 3]

 
// value of a can be an object 

// function myFun(a){
//  return a
// }
//  let result =  myFun({firstName : "Jumshaid", age : 12})
//  console.log(result)  //{firstName: 'Jumshaid', age: 12}
//  console.log(result.age)  // 12


// Can the value of a(parameter) be a function ???? Yes 



// function myFun2(){
//     console.log("Inside Fun 2")
// }

// function myFun(a){
//  return a
// }
//  let result =  myFun(myFun2)
 //onsole.log(result)   // ƒ myFun2(){
   // console.log("Inside Fun 2")
//}




// function myFun2(){
//     console.log("Inside Fun 2")
// }

// function myFun(a){
//     a(); //  Inside Fun 2

// }
//  let result =  myFun(myFun2) 
 


// function myFun2(){
//     console.log("Inside Fun 2")
// }

// function myFun(Callback){
//     console.log("Hi, i am iside main Function, i am calling a callback function",)
//     Callback(); //  Inside Fun 2

// }
//  let result =  myFun(myFun2) 
 



// function myFun2(name){
//     console.log("My name is ", name) // undefined
// }

// function myFun(Callback){
//     console.log("Hi, i am iside main Function, i am calling a callback function",)
//     Callback(); //  Inside Fun 2

// }
//  let result =  myFun(myFun2) 




function myFun2(name){
    console.log("My name is ", name) //  My name is  Jimi
}

function myFun(Callback){
    console.log("Hi, i am iside main Function, i am calling a callback function",)
    Callback("Jimi"); //  Inside Fun 2

}
 let result =  myFun(myFun2) 
 