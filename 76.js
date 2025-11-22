// 20251122 


//short method to write methods(function inside object)



// regular function(method)

const user1 = {
   
    firsName :  'jumshaid',
    age : 12,
    about :function(){
        console.log(this.firsName , this.age) //  Jumshaid 12
    }
}

user1.about() // Jumshaid 12


// with short



const user2 = {
   
    firsName :  'Jimi',
    age : 24,
    about(){
        console.log(this.firsName , this.age)
    }
    
}

user2.about() // Jimi 24



// this short can't be applied on arrow function

