// 20251112

// Maps 
// different from the array map method
// map is an iterable 
// stored data in ordered fashion 
// store key value pair (like object)
// dublicate keys are not allowed like object


// Different b/w map and object 
// objects can only have string or symbol as key 
// in maps you can use anything as key (like array , number, string )

// const person = {
//     Name : "Jumshaid",
//     Age : 2
// }
// // you can access data from the person object like 

// console.log(person.Name) // Jumshaid
// console.log(person["Name"]) // Jumshaid
// console.log(person[Name]) //  error >>   Name is not defined

// Object Literal 
// Creating key value pairs and enlsoning them in the curly bracers is know as object literal (like above example )

// in object literal key is always in string or rarly in symbol data type 

// Key >> String(99.9%)
// Key >> Symbol(0.1%)




// const person = {
//     Name : "Jumshaid",
//     Age : 2, 
//     1 : "One",
//     2 : "Jimi"

// }

// // console.log(person.1) // error
// console.log(person[1]) // 1
// console.log(person["1"]) // 1
// console.log(typeof person[1]) //  string


// // or 

// for (let ki in person){
//     // console.log(ki)
//     console.log(typeof ki) // string
// }





// Map 
// Stored key value pairs 

// const person = new Map()
// console.log(person) // Map(0) {size: 0}


// now add data in it like set() as you already did

// const person = new Map();
// person.set({1 : "one"})
// person.set({1 : "one"}, "object literal as key")
// person.set("myName", "Jumshaid")
// person.set('myAge' , 12)
// // console.log(person) // Map(2) {'myName' => 'Jumshaid', 'myAge' => 12}

// //  you can set any type of key in map  (unlike object

// person.set(1, 'one')
// console.log(person) //  {'myName' => 'Jumshaid', 'myAge' => 12, 1 => 'one'}

// // how to access the data from the map

// console.log(person.myName) // undefined
// console.log(person["myName"]) // undefined

// // Map() has a by default method get()

// console.log(person.get('myName')) // Jumshaid
// console.log(person.get('myAge')) // 12
// console.log(person.get(1)) // ones

// to print all the keys use method keys()

// console.log(person.keys())  // MapIterator {'myName', 'myAge', 1}
// as this is mapIterator we can apply loop on it(keys)

// for (let key of person.keys()){
// console.log(key)
// }



// for (let key of person.keys()){
// console.log(key, typeof key)   // myName string    ,      myAge string ,    1 'number'
// }


// // we can use anything as key in map unlike object (now using array as key)
// person.set([1, 2, 4] , "array as key")

// for (let key of person.keys()){
// console.log(key, Array.isArray(key))     //  myName false   ,  myAge false  ,   1 false  ,  (3) [1, 2, 4]  true
 
// } 


// // now writing key as object literal 

// person.set({1 : "one"} , "Object literal as key")



// console.log(person.keys())  // MapIterator {'myName', 'myAge', 1}

// we can apply for in loop on objects and cannot apply for of loop (as object are not iteralbe )

// Iterable >> on which we can apply for of loop 
// as map is iterable we can apply for of loop on it

// for (let key of person){
//     console.log(key) // (2) [{…}, undefined] ,  (2) [{…}, 'object literal as key'] ,  (2) ['myName', 'Jumshaid'] .....,
// } 


// for (let key of person){
//     console.log(typeof key) 
// } 

// for (let key of person){
//     console.log(Array.isArray(key))  // true
// } 

// in array we have key and value now 


// for (let key, vlaue  of person){ // error 
//     console.log(key, vlaue)  // true
// } 

// now with destructuring like we use in react js

// as we are dealing with array so 

// for (let [key, vlaue ] of person){ // error 
//     console.log(key, vlaue)  
// } 


// directly passing array in map 

// const person = new Map([['Jmshaid', 'MyName ']])
// console.log(person.get()) // undefined 
// console.log(person.get("Jmshaid")) // MyName 

// Adding more values

// const person = new Map([['Jmshaid', 'MyName '], ['myAge' , "12"]])
// console.log(person.get()) // undefined 
// console.log(person) // Map(2) {'Jmshaid' => 'MyName ', 'myAge' => '12'}


const person1 = {
    "firstName " : "Jumshaid",
    'Age' : 12,

}

// we want to store the extre information of persong but not in the object person1

// we can use map and set this object as key

const personInfo = new Map()
personInfo.set(person1, {'gender': 'Male'})
console.log(personInfo) // Map(1) {{…} => {…}}(object mapping with object)

console.log(person1["firstName "]) // Jumshaid
console.log(personInfo.get(person1)) // {gender: 'Male'}
console.log(personInfo.get(person1).gender) // Male
console.log(personInfo.get(person1.gender)) // undefined