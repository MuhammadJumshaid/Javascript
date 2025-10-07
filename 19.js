// 20251007 

// Switch Statement


// let day = 0;
// let day = 3;

// if(day == 0 ){
//     console.log("Sunday");
// }
// else if(day == 1){
//     console.log("Monday");
// }
// else if(day == 2){
//     console.log("Tuesday");
// }
// else if(day == 3){
//     console.log("Thursday");
// }
// else if(day == 4){
//     console.log("Friday");
// }
// else if(day == 5){
//     console.log("Saturday");
// }
// else if(day == 6){
//     console.log("Wednesday");
// }
// else {
//     console.log("Invalid number");
// }


// now with Switch statement

// case 0 >> here 0 is the value of variable 
// break keyword >> break keyword is necessary other wise flow will not stop , if we use break keyword then our code will jump outside the switch statement after printing its concern

let day = 23

switch(day){
    case 0:
    console.log("Sunday");
    break
    case 1:
    console.log("Monday");
    case 2:
     break;
    console.log("Tuesday");
    case 3:
    console.log("Wednesday");
    case 4:
    console.log("Thursday");
    case 5:
    console.log("Friday");
    case 6:
    console.log("Saturday");

    default:
        console.log("entered number is wrong");
}