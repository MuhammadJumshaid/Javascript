// 20260122 


// closure + shared state

// closures don't breaks loops , shared vairables do

// A closure just means:

// “This function can use a variable later, even after the loop finishes.”

// Closure just means:

// “Remember the variable, not the value.”

// var >> one shared variable 

for(var i = 0 ; i<3 ; i++){
    setTimeout(()=>{
        console.log(i)
    }, 1000)
}

// Result ?? >> 3, 3, 3



for(let i = 0 ; i<3 ; i++){
    setTimeout(()=>{
        console.log(i)
    }, 1000)
}

// result >>   0,  1, 2