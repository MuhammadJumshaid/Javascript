// 20251029 

// Let and const are block scope 
// Var is a function scope

// {} >> Scope 


// {
//     let firstName = "Jumshaid"
// }
// console.log(firstName) // error  >> firstName is not defined


// {
//     let firstName = "Jumshaid"
// console.log(firstName)  // Jumshaid

// }

// {
//     let firstName = "Jimi"
// console.log(firstName)  // Jimi

// }

// {
//     const firstName = "Jimi"
// }
// console.log(firstName)  //  firstName is not defined


// {
//     const firstName = "Jimi"
// console.log(firstName)  // Jimi

// }



// {
//     var firstName = "Jumshaid"
// }
// // console.log(firstName)  // Jumshaid

// {
//     console.log(firstName)  // Jumshaid
// }



//  Now real time example 

// if(true){
//     var firstName = "Jumshaid"
//     console.log(firstName) // Jumshaid
// }
// console.log(firstName) // Jumshaid


// if(true){
//     let firstName = "Jumshaid"
//     console.log(firstName) // Jumshaid
// }
// console.log(firstName) // error >>   firstName is not defined

// if(true){
//     const firstName = "Jumshaid"
//     console.log(firstName) // Jumshaid
// }
// console.log(firstName) // error >>   firstName is not defined


// function myApp(){
//     if(true){
//         let firstName = "Jimi"
//         console.log(firstName) // Jimi
//     }
//     console.log(firstName) // Error
// }

// myApp()

// let firstName = "Jumshaid"
// function myApp(){
//     if(true){
//         let firstName = "Jimi"
//         console.log(firstName) // Jimi
//     }
//     console.log(firstName) // Jumshaid
// }

// myApp()


// function myApp(){
// let firstName = "Jumshaid"
//     if(true){
//         let firstName = "Jimi"
//         console.log(firstName) // Jimi
//     }
//     console.log(firstName) // Jumshaid
// }

// myApp()

function myApp(){
    if(true){
        var firstName = "Jimi"
        console.log(firstName) // Jimi
    }
    console.log(firstName) // Jimi

    if(true){
        console.log(firstName)
    }
} 
console.log(firstName) // Error ?? Why
myApp()

