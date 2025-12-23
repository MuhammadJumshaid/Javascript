// 20251223

// Classes , Inheritence

class Animal{
    constructor(name, age){
this.name = name ,
this.age = age
    }
    eat(){
         return `${this.name} is eating`
        }
    isSuperCute(){
        return this.age <= 1;
    }
    isCuet(){
        return true
    }
}

const animal1 = new Animal("Tom", 2)
console.log(animal1) // Animal {name: 'Tom', age: 2}
console.log(animal1.isSuperCute()) // false
console.log(animal1.eat()) // Tom is eating
console.log(animal1.isCuet()) // true


// Lets create another class

// class Dog{
//     constructor(name, age){
//         this.name = name,
//         this.age = age
//     }
//      eat(){
//          return `${this.name} is eating`
//         }
//     isSuperCute(){
//         return this.age <= 1;
//     }
//     isCuet(){
//         return true
//     }
// }

// const dog1 = new Dog("Tomy", 2)
// console.log(dog1)
// console.log(dog1.isSuperCute()) // false
// console.log(dog1.eat()) // Tomy is eating
// console.log(dog1.isCuet()) // true





// Inheritence 

// instead of creating another class we can inherit(extend) it(dog class) form Animal (parent) class
// when we create its object the the constructor of parent class will be called 
// the child(Dog) class can access all the properties and methods of its parent(Animal) class
// if any properties and methods will be same in the parent(super, base) and child(sub, derived) class the , then child class methods and properties will be prioritized
class Dog extends Animal{

}
// the same output is here
const dog1 = new Dog("Tomy", 2)
console.log(dog1)
console.log(dog1.isSuperCute()) // false
console.log(dog1.eat()) // Tomy is eating
console.log(dog1.isCuet()) // true