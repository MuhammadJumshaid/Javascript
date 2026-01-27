// 20260127

// function returning promise


// resolved

// function ricePromise(){
//     const bucket = ["chips", "tea", "cofee", "tomato", "vegetables", "rice", "salt", "beans", "chili","potato" ]
//   return  new Promise((resolve, reject)=>{
// if(bucket.includes("potato") && bucket.includes("vegetables") && bucket.includes("salt")){
//     resolve({value : "fried Rice"})
// }
// else {
//    reject("could'nt do it")
// }
// })
// }


// ricePromise().then(
//     (rice)=>{ console.log("let eate", rice.value) }
// ).catch((error)=>{
// console.log(error)
// })



// Rejected

function ricePromise(){
    const bucket = ["chips", "tea", "cofee", "tomato", "", "rice", "salt", "beans", "chili","potato" ]
  return  new Promise((resolve, reject)=>{
if(bucket.includes("potato") && bucket.includes("vegetables") && bucket.includes("salt")){
    resolve({value : "fried Rice"})
}
else {
   reject("could'nt do it")
}
})
}


ricePromise().then(
    (rice)=>{ console.log("let eate", rice.value) }
).catch((error)=>{
console.log(error)
})