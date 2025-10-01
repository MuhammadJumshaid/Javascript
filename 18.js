// 20251001 

// if else-if else 

// if 
// else if
// else if
// else if 
// else 


// Note >> Javascript starts execution from top to bottome if the first if bolck result is true then it prints that if block statement and go(jump) outside the if-else statement, if the first if statement is wrong then respectives it checks the next if-statement and so on and else statement



let temperature = 15

if(temperature < 10 )
{
    console.log("Extremely cold outside");
}
else if(temperature < 16){
    console.log("it is cold outside");
}
else if(temperature<25){
    console.log("Slightly cold outside");
}
else if(temperature < 35){
    console.log("weather is Ok");
}
else if(temperature < 45 ){
    console.log("wheather is hot ");
}
else {
    console.log("too hot!!");
}


console.log("outside the if-else block");