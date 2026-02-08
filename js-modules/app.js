// 20260208 

import age from "./utils/age.js";
// import { Person } from "./utils/person.js";
import  Person  from "./utils/person.js";

// import firstName from "./utils/fname.js";
import {firstName as fname} from "./utils/fname.js";
//   console.log("my name is", firstName + ", myAge is " + age)
  console.log("my name is", fname + ", myAge is " + age)
//   console.log(firstName)

const person = new Person("Muhammad", "Jumshaid", 12)
console.log(person) // Person {firstName: 'Muhammad', lastName: 'Jumshaid', age: 12}
console.log(person.firstName) // Muhammad
console.log(person.info()) // Muhammad Jumshaid 12