// 20251123 

// Chaining
// when we create object by passing __proto__ , a chain is created

// proto is creating a bond (if an object not contains a value(key, method etc) then it will check its proto(other object))
// __proto__ or [[prototype]]


// const obj1 = {
//     key1 : "value1",
//     key2 : "value2",
// } 


// const obj2 = {
//     key3 : "value3"
// }

// console.log(obj1.key1) // value1
// console.log(obj2.key3) // value3

// now i want that from obj1 to get the value of obj1
// like 
// console.log(obj2.key1) // undefined


// how can i do this

// let see first how to create object 


// const obj2 = {};

// console.log(obj2) // {} >> empty object
// there is another way to create object 


// const obj2 = Object.create(null)
// console.log(obj2) // {} >> empty object


// now lets go to our task


// const obj1 = {
//     key1 : "value1",
//     key2 : "value2",
// } 


// const obj2 = Object.create(obj1)
// console.log(obj2) // {}

// when we have created object like this javascript has added a property __prototyp__(syntax in the official descritiption of ecmascript) or [[prototyp]] (nowadays) , which is bind to the object obj1
// here obj1 is the __proto__ of obj2 , if js can't find a property(value) in obj2 then it cheks in the __proto__([[prototype]])
// if i obj2 has not any value then it will check the obj1 and gets it values


const obj1 = {
    key1 : "value1",
    key2 : "value2",
} 


const obj2 = Object.create(obj1)
console.log(obj2.key1) // value1

obj2.key1 = 'unique'
console.log(obj2.key1) // unique

console.log(obj2.__proto__)  // {key1: 'value1', key2: 'value2'}


// three words  >> __proto__ , [[prototype]] , prototype

// here  __proto__ , [[prototype]]  and protype is same thing   but prototype is different(used with function) 


console.log(__proto__) // window object


// obj.__proto__ >> this is also called dunder 

