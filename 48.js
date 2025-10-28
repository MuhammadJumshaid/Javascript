// 20251028

// Functions inside Functon

let mainFun = ()=>{

    const mySubFun = ()=>{
        console.log("inside my mySubFun")
    }
    const sum = (num1, num2)=>{
        return num1 + num2
    }
    const mult = (num1, num2) => num1 * num2

    console.log("Inside main Function")


    mySubFun()
   console.log(sum(5,6))
   console.log(mult(5,6))
}
mainFun()
//  mySubFun() // Error >> mySubFun is not defined