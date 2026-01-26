// 20260126 

// Promise >> aisi value jo hame abhi nhi pta lekin future me pta ho gi
// Promise >> represent future value
// promis is an asyncronous task >> its work for browser
// const bucket = ["potato", "rice", "salt", "vegitables"]
// const bucket = ["potato", "", "salt", "vegitables"]
// const bucket = ["potato", "rice", "salts", "vegitables"]
// const friedRice = new Promise((resolve, reject)=>{
// if(bucket.includes("potato") && bucket.includes("rice") && bucket.includes("salt")){
//     resolve("enjoy friedRice")
// }
// else{
//     reject("sorry, i can't fulfilled my promise")
// }
// })
// friedRice.then((rice)=>{
// console.log(rice)
// }, (sorry)=>{
// console.log(sorry)
// })






// promise >> object >> 
// console.log(Promise) // ƒ Promise() { [native code] }

// promise >> {"status" : "pending", value : undefined }
// promise >> {"status" : "fulfilled", value : resolvedFun >> fulfilled thing }
// promise >> {"status" : "rejected", value : rejectFun>> error }
// Promise >> i said you i will make friedRice for you 

// Creating Promise 
// const bucket = ["chips", "tea", "cofee", "tomato", "vegetables", "rice", "salt", "beans", "chili","Potato" ]
// const bucket = ["chips", "tea", "cofee", "tomato", "vegetables", "rice", "salt", "beans", "chili","potato" ]

// const friedRicePromis = new Promise((resolve, reject)=>{
// if(bucket.includes("potato") && bucket.includes("vegetables") && bucket.includes("salt")){
//     resolve("Fried Rice")
// }
// else {
//     console.log("Could'nt do it")
// }
// })

// // how to consume promise 
// friedRicePromis.then(
//     // jb promise resolve ho ga 
// (friedRice)=>{
// console.log("lets eat :", friedRice)
// },
// // jb promis reject ho ga
// (error)=>{
// console.log(error)
// }
// )



// lets do again 
// in the resolve and reject function we can pass anything like array , string , object , functions etc



// // const bucket = ["chips", "tea", "cofee", "tomato", "vegetables", "rice", "salt", "beans", "chili","potato" ]
// // for error(rehect)
// const bucket = ["chips", "tea", "cofee", "tomato", "", "rice", "salts", "beans", "chili","potato" ]

// const friedRicePromis = new Promise((resolve, reject)=>{
// if(bucket.includes("potato") && bucket.includes("vegetables") && bucket.includes("salt")){
//     resolve({value : "fried Rice"})
// }
// else {
//    reject(new Error("sorry, I can't fulfilled my Promise"))
// }
// })

// // how to consume promise 
// friedRicePromis.then(
//     // jb promise resolve ho ga 
// (friedRice)=>{
// console.log("lets eat :", friedRice.value)
// },
// // jb promis reject ho ga
// (error)=>{
// console.log(error)
// }
// )




// now catch function with then 



// // const bucket = ["chips", "tea", "cofee", "tomato", "vegetables", "rice", "salt", "beans", "chili","potato" ]
// // for error(rehect)
// const bucket = ["chips", "tea", "cofee", "tomato", "", "rice", "salts", "beans", "chili","potato" ]

// const friedRicePromis = new Promise((resolve, reject)=>{
// if(bucket.includes("potato") && bucket.includes("vegetables") && bucket.includes("salt")){
//     resolve({value : "fried Rice"})
// }
// else {
//    reject(new Error("sorry, I can't fulfilled my Promise"))
// }
// })

// // how to consume promise 
// friedRicePromis.then(
//     // jb promise resolve ho ga 
// (friedRice)=>{
// console.log("lets eat :", friedRice.value)
// }
// ).catch(
//     (error)=>{
//         console.log(error)
//     }
// )



// Asyncrouns check


console.log("script start")



// const bucket = ["chips", "tea", "cofee", "tomato", "vegetables", "rice", "salt", "beans", "chili","potato" ]
// for error(rehect)
const bucket = ["chips", "tea", "cofee", "tomato", "", "rice", "salts", "beans", "chili","potato" ]

const friedRicePromis = new Promise((resolve, reject)=>{
if(bucket.includes("potato") && bucket.includes("vegetables") && bucket.includes("salt")){
    resolve({value : "fried Rice"})
}
else {
   reject(new Error("sorry, I can't fulfilled my Promise"))
}
})

// how to consume promise 
friedRicePromis.then(
    // jb promise resolve ho ga 
(friedRice)=>{
console.log("lets eat :", friedRice.value)
}
).catch(
    (error)=>{
        console.log(error)
    }
)

setTimeout(()=>{
console.log("inside setTimeOut")
},0)

for(let i = 0 ; i <= 100; i ++){
    console.log(Math.random(), i)
}

console.log("script end")


// SetTimeOut vs Promise

// both are handled by the browser
// setTimeout has least Priority then promise 
// promise will execute first ten setTimeout
// promise will go to the microTask Que after processed by the browser
// setTimeout will go to the callback que que 

// if the call stack is empty the event loop send promise fist then setTimeout in the callstack

// Actually promise itself is an object it consumed by the browser >> .then .catch work

