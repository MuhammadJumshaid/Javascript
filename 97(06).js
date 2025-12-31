//  20260101 

// Lexical Enivirnment / Scope Chain 


// const lastName = "Jumshaid";

// const printName = function(){
//     const firstName = "Muhammad";
//     console.log(firstName); // Muhammad
//     console.log(lastName) // Muhammad
// }

// printName()


// here lastName is not present in the local memory of function , js taking its value form its laxical environment(a thing where it lies(mean its parent))

// now lets see a complex example 



const lastName = "Jumshaid";

const printName = function(){
    const firstName = "Muhammad";
    

    function myFun(){
    console.log(firstName); // Muhammad
    console.log(lastName) // Muhammad
    }
    myFun()
}

printName()

// here the firstName and lastName does not lie inside the myFun function to js cheks its parent(lexical environmet), if    any value not find in its lexical enviromnet then it cheking its uper level (parent) untill the global execution context
