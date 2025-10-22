// 20251022 

// Object Destructurig 


// let obj = {
//     myName : "Jumshaid", 
//     myAge : 12
// }

// console.log(obj); // {myName: 'Jumshaid', myAge: 12}
// let var1 = obj.myName;
// let var2 = obj.myAge;

// console.log(var1); // Jumshaid
// console.log(var2); //12 


// with convention var name (same)

// let myName = obj.myName;
// let myAge = obj.myAge;

// console.log(myName); // Jumshaid
// console.log(myAge); //12 


// Now with object Destructuring 

//  let {myName , myAge } = obj
//  console.log(myName) // Jumshaid;
//  console.log(myAge); // 12

// If you want the other var name 

//  let {myName:var1 , myAge : var2 } = obj
// //  console.log(myName); // Error  >> myName is not defined
//  console.log(var1) // Jumshaid;
//  console.log(var2); // 12

 // Note >> By default var names are same as the name of key



 // IF you want tp store the other proerties in other var 

 let obj = {
    myName : "Jumshaid", 
    myAge : 12,
    myDOB : "1/2/2000",
    myGenger : "Male"
}
console.log(obj); 

const {myName, myAge, ...OtherProp} = obj
console.log(myName); // Jumshaid
console.log(myAge); // 12
console.log(OtherProp); // {myDOB: '1/2/2000', myGenger: 'Male'}