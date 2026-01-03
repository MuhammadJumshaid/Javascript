// 20260103 

// Closures Tasks 

// Create a function that will return(assign into) another function , 

// when you called that function this will print "Hi, You called me " , but when you agian call function this should print "i have been already called once"


// const func =  ()=>{
// console.log("you called me")
// return ()=>{
//     console.log("i have been already called once")
// }
// }

// const myFun = func();
// myFun()
// myFun()
// myFun()



// Soulution

const func = ()=>{
    let counter = 0 

    return ()=>{
        if(counter < 1){
            console.log("Hi , you called me")
            counter ++ ;
        }
        else {
            console.log("i have been already called once")
        }
    }
}

const myFun = func();
myFun()
myFun()
myFun()
