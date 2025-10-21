// 20251021 

// Difference b/w dot and braket notation (in objects)

// const person = {
//     name : "Jumshaid",
//     age : 23,
//     Person Gender : "Male" // Error (Spaces are not allowed in js)
// }


// If we have more than one words in property name (key), we must write it ian comas


// const person = {
//     name : "Jumshaid",
//     age : 23,
//     "Person Gender" : "Male" 
// }
// console.log(person); // {name: 'Jumshaid', age: 23, Person Gender: 'Male'}

// // How to access more than one word property data 
// // We cannot access it with dot , to access more than one work key we use brakets[]

// console.log(person.age);
// console.log(person.name);
// // console.log(person.Person Name); // error

// console.log(person["Person Gender"]); // Male



// Task 
// you have the follwing given data , you have to add a propery(key) named mail in the person object
// condition : You have to take the mail property from the key variable 

// const key = "mail";
// const person = {
//     name : "Jumshaid",
//     age : 23,
//     "Person Gender" : "Male" 
// }
// console.log(person);

// person.key = key
// console.log(person);  // {name: 'Jumshaid', age: 23, Person Gender: 'Male', key: 'mail'}



// const key = "mail";
// const person = {
//     name : "Jumshaid",
//     age : 23,
//     "Person Gender" : "Male" 
// }
// console.log(person);

// person.key = "jimi@gmail.com"
// console.log(person); // {name: 'Jumshaid', age: 23, Person Gender: 'Male', key: 'jimi@gmail.com'} 

// const key = "mail";
// const person = {
//     name : "Jumshaid",
//     age : 23,
//     "Person Gender" : "Male" 
// }
// console.log(person);

// person["key"] = "jimi@gmail.com"
// console.log(person);  //  {name: 'Jumshaid', age: 23, Person Gender: 'Male', key: 'jimi@gmail.com'}
 // The same key word is added as key , but we want mail word as key from the key var

 // Solution 

 const key = "mail";
const person = {
    name : "Jumshaid",
    age : 23,
    "Person Gender" : "Male" 
}
console.log(person);

person[key] = "jimi@gmail.com"
console.log(person); //   {name: 'Jumshaid', age: 23, Person Gender: 'Male', mail: 'jimi@gmail.com'}
 