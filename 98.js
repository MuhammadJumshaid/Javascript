// 20260102 

// Closueres 
// A function remembers variables from its lexical scope, even after the outer function has finished execution. is called closures

// when a function is retrun from a function this will get the variables from its local memeory (from where this function is returned) this is closure

//  functions remember the scope in which they were CREATED, not where they are CALLED. This is called lexical scoping, and the memory that is kept alive is called a closure.

// Functions can return number , string , array , object 
// Functions can return function 

//JavaScript Scope Chain Rule

//When a variable is used inside a function:

// JS looks in the local scope

// If not found → looks in the outer lexical scope

// Continues until global scope




// function myFun() {
//     return 1;
// }
// const ans =  myFun()
// console.log(ans) // 1



// function outerFunction() {
//     function innerFunction(){
//         console.log("hellow world")
//     }
//     return innerFunction;
// }
// const ans =  outerFunction()
// console.log(ans) // inner function
// ans() // hellow world





function printFullName(firstName, lastName) {
    function printName(){
        console.log(firstName, lastName)
    }
    return printName;
}
const ans =  printFullName("Jumshaid", "Kamran")
console.log(ans) // inner function
ans() // hellow world