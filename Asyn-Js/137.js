// 20260127/28

// Promise.resolve 
// Promise Chaining

// Promise.Resovlve >> takes a value and return a promise
// Promise.resolve(value) creates a Promise that is already successful (fulfilled).
// no waiting 
// no asyn work
// already done

// example 

// const p = Promise.resolve("Hello Muhammad")

// This means:

// Promise is fulfilled immediately
// Result value = "Hello Muhammad"

// p.then((value) => {
//     console.log(value)
// })


// Same thing in Short form 


// Promise.resolve(5)
//   .then(num => console.log(num))


  // Think of this:

//   Promise.resolve(value)

//   is the same as writing:



// new Promise((resolve) => {
//     resolve(value)
// })




// So:

// No reject

// No delay

// Direct success


// Why do we even need Promise.resolve()?

// ans : Convert a normal value into a Promise



// let number = 10

// Promise.resolve(number)
//   .then(n => console.log(n * 2))




  // Why?
// 👉 Because .then() works only on Promises.


// Promise.resolve() is async
// Even though it resolves immediately, .then() still runs after current code finishes.

// One sentence to remember forever

// Promise.resolve() creates an already-fulfilled Promise, but its .then() still runs asynchronously.








// Promise.Resolve
// Promise.Resolve() receives a value and return a promise

// const myPromise = Promise.resolve(5)
// console.log(myPromise) // Promise {<fulfilled>: 5}

// myPromise.then(val=>console.log(val)) // 5


// or 

// Promise.resolve(5).then(val=>console.log(val)) // 5


//  then() .....> then method always return promise >> why , use??
// we can create chain of promise

// proof 

function myPromiseFun(){
return new Promise((resolve, reject)=>{
resolve("Muhammad")
})
}

// myPromiseFun()
// .then((val)=>{
//     console.log(val) // "Muhammad"
//     val += "Jimi"
//     return val // returning promise not a string
//     // its inetnal working is like this
// //    return Promise.resolve(val) 
// })
// .then((val)=>{
//     console.log(val) // MuhammadJimi
//     val += "Khan"
//     console.log(val)
// })


// if we not return this , it will return undefined by default

myPromiseFun()
.then((val)=>{
    console.log(val) // "Muhammad"
    val += "Jimi"

    // internally 
    // Promise.resolve(undefined)
    // or 
    // Promise.resolve()
    
})


.then((val)=>{
    console.log(val) // undefined
    val += "Khan"
    console.log(val)
})



// we cannot apply then on a string 

// "Jimi".then((val)=>console.log(val)) // error >> "Jimi".then is not a function

