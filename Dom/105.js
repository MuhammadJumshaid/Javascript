// 20260107 

// Change Text
// textContent and innerText

// textContext will give us all the written text , although this is hidden(display none) 
// but 
// innerText will display only the visible text


// const mainHeading = document.getElementById("main-heading")
// const mainHeading = window.document.getElementById("main-heading")
// console.log(mainHeading)
// console.log(mainHeading.textContent) // Manage your Tasks
// after changing heading in html file 
// console.log(mainHeading.textContent) // Manage your Tasks I am Fine! 

// as we know that every element is stored in documet as object so , now we treat it like an object property and change it 

// mainHeading.textContent = "Hi Jimi, How are You"

// console.log(mainHeading.textContent) // Hi Jimi, How are You


const mainHeading = document.getElementById("main-heading")
console.log(mainHeading)
console.log(mainHeading.innerText) // Manage your Tasks
mainHeading.innerText = "Jumshaid"
console.log(mainHeading.innerText) // Jumshaid

