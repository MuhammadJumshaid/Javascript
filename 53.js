//20251030 
// Param(Parameter destructuring)
// Mostly used  in react (for object destructuring)

// const person = {
//     firstName : "Jumshaid",
//     gender : "Male",
// }

// console.log(person.firstName) // Jumshaid
// console.log(person.gender) // Male
// console.log(person.age) // undefined 




// const person = {
//     firstName : "Jumshaid",
//     gender : "Male",
// }

// function personDetails(obj){

//     console.log(obj.firstName)  // Jumshaid
//     console.log(obj.gender) // Male 
//     console.log(obj.age) // undefined
// }

// personDetails(person)



// now with param destructuring 





const person = {
    firstName : "Jumshaid",
    gender : "Male",
}

function personDetails({firstName, gender ,age}){

    console.log(firstName) // Jumshaid
    console.log(gender) // Male 
    console.log(age) // undefined 
}

personDetails(person)


