// 20251001 

// and , or Operator 

// AND (&&) operator 

// AND operator gives result in true or false , this is a copmarison operator.if the both coditions are true the reslult will be true, if the one conditions is false the result will be false,  if the first conditions is false, the second condition will not be checked , as for and operator both codition must be true


let myName =  "Jumshaid";
let age = 12
// if(myName[0] == "J"){
//     console.log("My Name Starts with J");//  My Name Starts with J
// }
// else{
//     console.log("condition false");
// }

// if(myName[0] == "j"){
//     console.log("My Name Starts with J");//  My Name Starts with J
// }
// else{
//     console.log("condition false"); // condition false
// }


// the above exapmple were for simple if else , now with && operator



// if(myName[0] == "J" && age >10){
//     console.log("Condition is true , iside if statement"); //  Condition is true , iside if statement
// }
// else{
//     console.log("condition false, inside else"); 
// }




// if(myName[0] == "j" && age >10){
//     console.log("Condition is true , iside if statement");
// }
// else{
//     console.log("condition false, inside else"); //  condition false, inside else
// }



// OR (||) Operator 

// The result of OR operator will be true if either(at least one ) condition will be true . 
// OR operator gives the result false only when all the coditons are false , otherwise the result will be ture



if(myName[0] == "j" || age >10){
    console.log("Condition is true , iside if statement"); //  Condition is true , iside if statement
}
else{
    console.log("condition false, inside else"); 
}

