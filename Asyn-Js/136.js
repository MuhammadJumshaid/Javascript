// 20260127 

// Promise and SetTimeOut

// i want to resolve / reject promise after two second


// Resolved
// function myPromiseFun(){
//     return new Promise((resolve, reject)=>{
//         let value = true
//         setTimeout(()=>{
//             if(value){ 
//                 resolve()
//             }
//             else reject()
//         }, 2000)
//     })
// }

// myPromiseFun()
//     .then(()=>{console.log("resolved")})
//     .catch(()=>{console.log("rejected")})


// Rejected
function myPromiseFun(){
    return new Promise((resolve, reject)=>{
        let value = false
        setTimeout(()=>{
            if(value){ 
                resolve()
            }
            else reject()
        }, 2000)
    })
}

myPromiseFun()
    .then(()=>{console.log("resolved")})
    .catch(()=>{console.log("rejected")})