// 20251001 

// Nestes if-else


    // prompt (take user input, by default it takes input and store it as a string)

let WinningNumber  = 23;
// let guessNumber = prompt("Geuss a number")
// console.log(guessNumber, typeof guessNumber);  // string
let guessNumber = +prompt("Geuss a number")
console.log(guessNumber, typeof guessNumber);  // number

if(guessNumber === WinningNumber){
    console.log("Your guess is right");
}
else{
    if(guessNumber < WinningNumber){
        console.log("number is smaller");
    }
    else{
        console.log("Number is greater");
    }
}

