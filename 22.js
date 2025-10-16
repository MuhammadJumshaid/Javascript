// 20251016 
// For Loop  

// print 1 to 9 

// for (let i = 1 ; i <= 9 ; i++){
//     console.log(i);
// }
// console.log(" current value of i is ", i);  // error 

// for (var i = 1 ; i <= 9 ; i++){
//     console.log(i);
// }
// console.log(" current value of i is ", i);  


// we can initialize i outside
let i = 1
for (  ;i <= 9 ; i++){
    console.log(i);
}
console.log(" current value of i is ", i);  



// Error in the below code due to missing ;  befor condition
// let i = 1
// for (  i <= 9 ; i++){
//     console.log(i);
// }
// console.log(" current value of i is ", i);  