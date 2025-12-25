// 20251225 
// getter and setters

// class Person {
//     constructor(firstName, lastName , age){
//         this.firstName = firstName,
//         this.lastName = lastName,
//         this.age = age
//     }
//     fullName(){
//         return      `${this.firstName} ${this.lastName}`
//     }
// }

// const person1 = new Person("Muhammad", "Jumshaid", 12)
// console.log(person1.firstName) // Muhammad
// console.log(person1.fullName) // whloe function
// console.log(person1.fullName()) // Muhammad Jumshaid

// how can i get the same result without parenthesis (treat as property (not function))

// write get before function Name


// getter methods

// class Person {
//     constructor(firstName, lastName , age){
//         this.firstName = firstName,
//         this.lastName = lastName,
//         this.age = age
//     }
//    get fullName(){
//         return      `${this.firstName} ${this.lastName}`
//     }
//     // now we can use it as a property
// }

// const person1 = new Person("Muhammad", "Jumshaid", 12)
// console.log(person1.firstName) // Muhammad
// console.log(person1.fullName) // Muhammad Jumshaid
// console.log(person1.fullName()) // error >> person1.fullName is not a function




// setter methods 

// after  creating the object we want to change its first and last name 


// class Person {
//     constructor(firstName, lastName , age){
//         this.firstName = firstName,
//         this.lastName = lastName,
//         this.age = age
//     }

    
// }

// const person1 = new Person("Muhammad", "Jumshaid", 12)
// console.log(person1.firstName) // Muhammad
// console.log(person1.lastName) // Muhammad
// console.log(person1.fullName) // Muhammad Jumshaid

// person1.firstName = "Jimi"
// person1.lastName = "Khan"

// console.log(person1.firstName) // Jimi
// console.log(person1.lastName) // Khan

// we can do the same work by creating another function




// setter methods




// console.log(person1.fullName) // Fatima Jamil


// // now i want that  when i write this 


// person1.fullName = "kamran Zubair"
// console.log(person1.fullName) // 

// the first name and last name will be changed , how can i do this





class Person {
    constructor(firstName, lastName , age){
        this.firstName = firstName,
        this.lastName = lastName,
        this.age = age
    }
     get fullName(){
        return      `${this.firstName} ${this.lastName}`
    }

    set fullName(fullNam){
        const [firstName , lastName] =  fullNam.split(" ");
        this.firstName = firstName;
        this.lastName = lastName
    }


}

const person1 = new Person("Muhammad", "Jumshaid", 12)
console.log(person1.firstName) // Muhammad
console.log(person1.lastName) // Muhammad

person1.fullName = "Zebi Niko"
console.log(person1.fullName) // Zebi Niko


