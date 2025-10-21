// 20251021 

// How to iteratre objects 

const person = {
    name : "Jumshaid", 
    age : 23,
    "person Hobbies" : ["Swimming", "Sleeping", "Gaming"]
}

// We can use two methods to iterate in object 
// 1. for in loop 
// 2. object.keys

// For in loop

// for (let i in person){
//     console.log(i) // name    age    person Hobbies
// }


// for (let key in person){
//     console.log(key) // name    age    person Hobbies
// }

// for (let key in person){
//     console.log(person.key) // undefined * 3
// }


// Values 

// for (let key in person){
//     console.log(person[key]) //  Jumshaid 23  ['Swimming', 'Sleeping', 'Gaming']
// }
// For if we have to print both keys and value

// for (let key in person){
//     console.log(key, ":" + person[key]) //   name :Jumshaid age :23 person Hobbies :Swimming,Sleeping,Gaming
// }
//  console.log (Array.isArray  (person["person Hobbies"]));  // true

// for (let key in person){
//     console.log(`${key} : ${person[key]}`)  // name :Jumshaid age :23 person Hobbies :Swimming,Sleeping,Gaming
// }




// 2. Object.keys 

 console.log( Object.keys(person)); // ['name', 'age', 'person Hobbies'] >> array

 console.log( typeof Object.keys(person)); // object (Typeof array)

  console.log(Array.isArray(Object.keys(person)))  // true


  // Now with for of loop

//   for(let key in person){
//     console.log(key); // name  age  person Hobbies
//   }

  for(let key in person){
    console.log(person[key]); // Jumshaid 23   ['Swimming', 'Sleeping', 'Gaming']
  }