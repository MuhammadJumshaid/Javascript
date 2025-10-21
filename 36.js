// 20251021 

// Objects  
// Objects are refrence type (stored in memory like arrays)
// Arrays are good but not sufficient for real world data
// Objects store key value pairs 
// keys are also known as properties
// Object don't have indexs


// How to create object (object literal)

// const person = {name : "Jumshaid", Age : 24}
// console.log(person);



// We can also create objects like (same as above)
// const person = {
//     name : "Jumshaid", 
//     Age : 24
// }
// console.log(person); // {name: 'Jumshaid', Age: 24}

// // How to add key value pair to object

// person.RollNO = 12;
// console.log(person); // {name: 'Jumshaid', Age: 24, RollNO: 12}


// How to access data from objects 

// const person = {
//     name : "Jumshaid", 
//     Age : 24
// }
// console.log(person); // {name: 'Jumshaid', Age: 24}

// // How to add key value pair to object

// person.RollNO = 12;
// console.log(person); // {name: 'Jumshaid', Age: 24, RollNO: 12}

// console.log(person.name) // Jumshaid
// console.log(person.RollNO) // 12
// console.log(person.Age) // 24s

// console.log(person);



 const person = {
    name : "Jumshaid", 
    Age : 24,
    Hobbies : ["Swimming", "Exercise", "Running", "Gaming"]
}
console.log(person)
console.log(person.Hobbies); // ['Swimming', 'Exercise', 'Running', 'Gaming']

console.log(person.Hobbies[2]); // Running


// Mostly we used dot notation to access properties(key) of object(for Single word key)
