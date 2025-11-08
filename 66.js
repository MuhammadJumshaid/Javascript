// 20251108



// iterables 

// array like objects 

//Iterables 
// Iterables are on which we can apply for of loop
// array , strings are iterables 

// // array
// const myArr = ['itm1', 'itme2', 'item3', "item4"]
// for(let item of myArr){
//     console.log(item) //  itm1 itme2  item3  item4]
// }


// const myName = "Jumshaid"
// for(let char of myName){
//     console.log(char) // J  u  m  s  h  a  i  d
// }


// Q. is object iterable ??? >> no

// const users = {
//     userId : 1, 
//     userName : 'Jimi', 
//     userAge : 14
// }

// for (let user of users){
//     console.log(user) // Error >>> users is not iterable
// }




// aray like objects >> are who has lenth property and whome we can access from index 
// example >> String (is array like Object)

const myName = "Jumshaid"
console.log(myName.length) // 8
console.log(myName[2]) // m