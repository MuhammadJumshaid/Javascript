// 20251031

// Function Returning function 


// Higher Order Function?? >> Function that returns a function or take a function as a parameter(callback function) are higher order function



// a function can return a string , a number , an array , an object .....
// can a function return a function ??? Yes

// function myFun(){
  
//     return "a"
// }
// console.log(myFun()) // a


// function myFun(){
  
//     return 12
// }
// console.log(myFun()) // 12



// function myFun(){
  
//     return ["Jimi", 2, "Ok"]
// }
// console.log(myFun()) //  ['Jimi', 2, 'Ok']


// function myFun(){
  
//     return {firstName : "Jimi", age : 12}
// }
// console.log(myFun()) //  {firstName: 'Jimi', age: 12}


// function returning a functio 

// function myFun(){
//   function myFun2(){
//         console.log("How are you")
//     }
//     return myFun2
// }

// const result = myFun()
// // console.log(result) // >> Functions at it is
// console.log(result()) // >> How are you
// result() //  How are you




// function myFun(){
//   function myFun2(){
//        return "Hi , Jimi"
//     }
//     return myFun2
// }


// const result = myFun()
// console.log( result()) // Hi , Jimi



function myFun(){
 return function(){
    return "Hi, Jumshaid"
 }
}


const result = myFun()
console.log( result()) // Hi, Jumshaid