// 20251029 

// Default Parameters 

// function Sum(a,b){
//     return a+b
// }

//  let result = Sum(4, 6)
//  console.log(result) // 10



// function Sum(a,b){
//     return a+b
// }

//  let result = Sum(4)
//  console.log(result) // NaN


// if we not provide the argumets to the parameter , how can we handle the default value of parameter 


// Old days

// function Sum(a,b){
//     if(typeof b  === "undefined"){
//         b = 0; 
//     }
//     return a+b
// }

//  let result = Sum(4)
//  console.log(result) // 4


// Now 

function Sum(a,b = 0){
 
    return a+b
}

 let result = Sum(4)
 console.log(result) // 4