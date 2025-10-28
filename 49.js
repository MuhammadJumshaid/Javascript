// 20251028 

// Lexical Scope or Lexical Scope Chaining or Lexical environment chaining 


// In the below example , myFun1 is inside myApp function , so my App() is the lexical scope (environment) of myFun1, if we are using a variable in function , js checks the value of var in that function , if it is not found in that function then js checks the value in its lexical(outer) function (environment) ....

// function myApp(){
//     const myVar = "value1"
//     function myFun1(){}
//     const myFun2 = function(){}
//     const myFun3 = ()=>{}
//     console.log(myVar)
// }

// myApp()



// function myApp(){
//     const myVar = "value1"
//     function myFun1(){
//         const myVar = "value 59"
//         console.log("Inside my Fun1", myVar) // value 59
//     }

//     console.log(myVar)
//    myFun1() // Inside my Fun1 value 59
// }

// myApp() // value1


// function myApp(){
//     const myVar = "value1"
//     function myFun1(){
//         // const myVar = "value 59"
//         console.log("Inside my Fun1", myVar) // value 1
//     }

//     console.log(myVar)
//    myFun1() // Inside my Fun1 value 1
// }

// myApp() // value1






const myVar = "value1"

function myApp() {
    function myFun1() {
        const myFun2 = function () {
            console.log("Inside my Fun1", myVar) // value 1
        }
         myFun2() // Inside my Fun1 value 1
    }



    console.log(myVar)
    myFun1() // Inside my Fun1 value 1
   
}

myApp() // value1