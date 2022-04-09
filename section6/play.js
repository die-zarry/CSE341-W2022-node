// const name = "Die";
// let age = 42;
// const hasHobbies = true;

const { getEnvironmentData } = require("worker_threads");

// const summariseUser = (userName, userAge, userHasHobbies) => {
//     return ('Name is ' +
//         userName + ', age is ' +
//         userAge + ', and the user hobbies: ' +
//         userHasHobbies);
// }
// const add = (a, b) => {
//     return a + b;
// }
// const addRandom = () => 22 + 5;

// const multiply = e => e * 4;
// const minus = (c, d) => c + d;

// console.log(minus(5, 7));
// console.log(add(2, 8))
// console.log(summariseUser("zarry", 50, true));
// console.log(addRandom());
// console.log(multiply(5));

// const person = {
//     name: 'Zarry',
//     age : 40,
//     maritalStatus: 'married',
//     childer: 'boy',
//     greet(){
//         console.log("hi " + this.name);

//     }
// };

// person.greet();
const hobbies = ["eating", "sleep", "coding"];
for(let hobby of hobbies) {
    console.log(hobby);
}