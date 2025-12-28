// 20251227
// 20251228

// js_part-2 


// compilation 

// why compilation

// how javascript code exucutes
// what is global execution context
// what is loca execution context


// Closures

// console.log(this)
// console.log(window)
// console.log(firstName)
// var firstName = "Muhammad"


// first of all javacscript code will be copiled
// two types of languages 
// first(Bach Scripting) where interpreter run , Interpreter interperate first line and then execute it , then secoond line then execute it
// other languages(Javascript) are where all the code first compiled then it will execute

// what does compiler do >> it sees (compiled)  our all the code



// 1.Compilation Phase( or Parsing phase) (consists of futher three steps(phases)) 
// 2.Code Execution phase



// 1.Compilation Phase( or Parsing phase) (consists of futher three steps(phases)) 
//    i.   Tokanizaion/Lexing (our code is breaked into samll pieces(chunks))
//    ii.  Parsing (Abastact Syntax Tree(AST) is created by these small pieces of code)
//    iii. Code Generation 


// Why we compile our code >>
// ans >> 
// in the Echam orignal documentaions it not not mention anywhere that our code should be compiled
// (
// but it is witten there ,
//  i.   there should be early error checking in the code, also
//  ii. (Determining) appropriate scope of all the variables
// )

// to acieve these two steps we have to parse our all the code

// now lets see how we do early error checking
// console.log(this)
// console.log(window)
// console.log(firstName)
// var firstName = ."Muhammad"  //  Unexpected token '.' (Syntax error)

// our browser will through error before executing any line (only error in the cosole)
// dut to parsing we captured our error early before executing the code

// (Determining) appropriate scope of all the variables
// js knows that a variable firstName belongs to global scpoe(a var that does not belong to any scope is in the global scope)





// // 2.Code Execution phase
// IN js code executes inside execution context (To execute code we have to create execution context)

// the first execution context that is created is know as global execuion context
// before executing the first line of our code the global exection context is created 
// Global exection context is consists of two phase

// 1. Global exection context 
// i.  Creation phase (Global memory )
// all the variables are created 
// vlues of var variable will be undefined 
// value of this will be window object (in case of brwoser)(for node js environment it will be different)
// window = {}

// ii. Code exection phase

// Js is Syncronous programming language itself (Single Threade(perform one task at a time then move to next))
// Syncronous programming (if first line of code is exucuting , the second(next) line will not be executed untill the first line will get not completed execution )

// Js don's have features of asyncronus (these are provided by the borwsers)

console.log(this) // window object 
console.log(window) //  window object 
console.log(firstName) // undefined
var firstName = "Muhammad"
console.log(firstName) // Muhammad










