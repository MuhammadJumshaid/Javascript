// 20251226 

// Static Methods and properties 
 // properties and methods than can be accessed(called) directly with the class (name) not by the object (made by class) 
 // the class name or property name should start with static keyword




// Normal methods and properties



//  class Person{
//     constructor(name, age){
//     this.name = name ,
//     this.age = age
//     }
//     eat(){
//          return `${this.name} is eating`
//         }
//     isSuperCute(){
//         return this.age <= 1;
//     }
//     isCuet(){
//         return "may oe may not"
//     }
// }

// in the above class, all the methods are related to the object of class(can accessed only by the instance of the class)

// const person1 = new Person("Jumshaid",12)
// console.log(person1.eat()) // Jumshaid is eating
// console.log(person1.isSuperCute()) // false
// console.log(person1.isCuet()) // may oe may not



// Static Methods and properties 
 // properties and methods than can be accessed(called) directly with the class (name) not by the object (made by class) 
 // the method name or property name should start with static keyword


 class Person{
    constructor(name, age){
    this.name = name ,
    this.age = age
    }
    // static method
    static classInfo(){
      return  "this is person class"
    }
    // static property 

    static myProperty = "Class static poperty is here"

    eat(){
         return `${this.name} is eating`
        }
    isSuperCute(){
        return this.age <= 1;
    }
    isCuet(){
        return "may oe may not"
    }
}

const person1 = new Person("Jumshaid", 12)
console.log(person1.eat()) // Jumshaid is eating
// console.log(person1.classInfo()) // error >>  person1.classInfo is not a function

// now calling with class name 

console.log(Person.classInfo()) // this is person class
console.log(person1.myProperty) // undefined
console.log(Person.myProperty) // Class static poperty is here