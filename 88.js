// 20251224 

// Super



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

// if a child class has property not in the parent class ?
// for this we have to create the constructor of child class
// class Dog extends Animal{

// }

// const dog1 = new Dog("Tomy", 12, 45)
// console.log(dog1) // Dog {name: 'Tomy', age: 12}



class Dog extends Animal{
constructor(name, age , speed){
    super(name , age);
    this.speed = speed ;
}

run(){ return `${this.name} is running at ${this.speed}kmph`}
}

const dog1 = new Dog("Tomy", 12, 45)
console.log(dog1) // Dog {name: 'Tomy', age: 12, speed: 45}

console.log(dog1.run()) // Tomy is running at 45kmph