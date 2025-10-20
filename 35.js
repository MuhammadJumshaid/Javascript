// 20251020 

// Array Destructuring

// const myArr = ["item1", "item2" ]
// const myArr = ["item1", "item2", "item3" ]

// Task >> create two variable. in one variable store item1 and in 2nd variable store item2

// let myVar1 = myArr[0];
// let myVar2 = myArr[1];
// console.log(myVar1); // item1
// console.log(myVar2); // item2


// now with shortcut(Destructuring)

// let [myVar1, myVar2] = myArr
// // Now they are like normal variables
// console.log(myVar1); // item1
// console.log(myVar2); // item2

// let [myVar1, myVar2] = myArr
// myVar1 = "How Are you"
// console.log(myVar1); // How Are you 
// console.log(myVar2); // item2


// const [myVar1, myVar2] = myArr
// myVar1 = "How Are you" 
// console.log(myVar1); // error  >> Assignment to constant variable.
// console.log(myVar2); // item2

// let [myVar1, myVar2, myVar3] = myArr
// myVar1 = "How Are you" 
// console.log(myVar1); // How Are you
// console.log(myVar2); // item2



// const myArr = ["item1"]

// let [myVar1, myVar2, myVar3] = myArr
// myVar1 = "How Are you" 
// console.log(myVar1); // How Are you
// console.log(myVar2); // undefined 
// console.log(myVar3); // undefined



// const myArr = ["item1", "item2", "item3" ]
// let [myVar1, , myVar2] = myArr
// myVar1 = "How Are you" 
// console.log(myVar1); // How Are you
// console.log(myVar2); // item3 


// const myArr = ["item1", "item2", "item3","item4" ]
// let [myVar1, myVar2] = myArr

// let myNewArr = myArr.slice(2)
// myVar1 = "How Are you" 
// console.log(myVar1); // How Are you
// console.log(myVar2); // item2
// console.log(myNewArr); // ['item3', 'item4']



const myArr = ["item1", "item2", "item3","item4" ]
let [myVar1, myVar2,  ...myNewArr] = myArr

myVar1 = "How Are you" 
console.log(myVar1); // How Are you
console.log(myVar2); // item2
console.log(myNewArr); // ['item3', 'item4']