// 20251101 

// Important array methods 

// ForEach
// Map
// Filter 
// Reduce

// 1.ForEach

 const myArr= [4,1,7,3]


// function myFun(number , index){
// console.log("index is :", index) // index is : 0
// // console.log("Number", number *2) // Number 8
// // or 
// console.log(`${number}*2 == ${number*2}`) // Number 8

// }

// myFun(myArr[0], 0)
// myFun(myArr[1], 1)
// myFun(myArr[2], 2)
// myFun(myArr[3], 3)






// function myFun(number , index){
// console.log(`index is ${index} and number is ${number}`)
// }

// for(let i = 0; i<myArr.length ; i++){
//    myFun(myArr[i], i)
// }



// Now with Foreach
// For each takes input a function as callback

// myArr.forEach(element => {
//     console.log(element) // 4    1     7      3
// });

// function myFun(number , index){
// console.log(`index is ${index} and number is ${number}`)
// }

// myArr.forEach(myFun)


// You can defined callback funcition inside foreach
// here we don't have to pass the name of function (Anonymous function)
// here foreacj pass the arguments to parameters from array

// myArr.forEach(function (number , index){
// console.log(`index is ${index} and number is ${number}`)
// })

// Task >> use foreach and multiply every number with two

// myArr.forEach(element => {
//     console.log(element * 2)
// });

// or 

// myArr.forEach((element) => {
//     console.log(element *2)
// });

// or with simple function 
// myArr.forEach(function(number) {
//     console.log(number *2)
// });

// you can also write index if you want

// myArr.forEach(function(number, index) {
//     console.log(number *2 , index)
// });

// Foreach in real time expamples 


const users = [

    {firstName : "Jimi", age : 23},
    {firstName : "Jumshaid", age : 24},
    {firstName : "Aqib", age : 12},
    {firstName : "Jameel", age : 26},
]

// users.forEach((users)=>{
// console.log( users.firstName)
// })

// We can do the same work with other loops , i.e for of , for etc ..


//  for(user of users ){
//     console.log(user.age)
//     console.log(user.firstName)
//  }

//  for(let user of users ){
//     console.log(user.age)
//     console.log(user.firstName)
//  }


for(var i = 0 ; i<users.length; i++){
    console.log(users[i].firstName)
}


// For of loop is new in js , but foreach is very  old, mostly people used foreac loop