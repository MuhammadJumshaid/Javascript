// 20251224

// javascript first check the method in the drived class , if it is not there then it will chek in the base class


// class Animal{
//     constructor(name, age){
// this.name = name ,
// this.age = age
//     }
//     eat(){
//          return `${this.name} is eating`
//         }
//     isSuperCute(){
//         return this.age <= 1;
//     }
//     isCuet(){
//         return true
//     }
// }


// class Dog extends Animal{
// constructor(name, age , speed){
//     super(name , age);
//     this.speed = speed ;
// }

// run(){ return `${this.name} is running at ${this.speed}kmph`}
// }

// const dog1 = new Dog("Tomy", 12, 45)
// console.log(dog1) // Dog {name: 'Tomy', age: 12, speed: 45}

// console.log(dog1.run()) // Tomy is running at 45kmph

// console.log(dog1.eat()) // Tomy is eating


//  comment all the above code 





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


class Dog extends Animal{
constructor(name, age , speed){
    super(name , age);
    this.speed = speed ;
}

run(){ return `${this.name} is running at ${this.speed}kmph`}
 eat(){
         return ` Modified Eat :  ${this.name} is eating`
        }
}

const dog1 = new Dog("Tomy", 12, 45)
console.log(dog1) // Dog {name: 'Tomy', age: 12, speed: 45}

console.log(dog1.run()) // Tomy is running at 45kmph

console.log(dog1.eat()) // Modified Eat :  Tomy is eating