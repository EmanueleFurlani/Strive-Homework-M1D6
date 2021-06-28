/*Ex.A
   Create a variable called "test" and assign a string to it.
*/
let test = "Hello"

/* Ex.B
    Create a variable called "sum" and assign to it the result of the sum between 10 and 20.
*/

function sum (a, b) {
    return a + b
}
console.log(sum(10, 20))

/* Ex.C 
    Create a variable called "random" and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/

function random (n) {
    let arr = [];
    for (i = 0; i < n; i++) {
     arr.push(Math.floor(Math.random() * 20));
    }
    return arr;
  }
  console.log(random(4));

/* Ex.D
    Create a variable called "me" and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/

const me = {
    name: "Emanuele",
    surname: "Furlani",
    age: 35,
}

/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/

delete me.age
//console.log(me)

/* Ex.F 
   Programmatically add to the object me an array called "skills", containing the programming languages you know right now.
*/
let skills = []
skills.push("javascript", "HTML", "CSS")
me.skills = skills


/* Ex.G 
   Programmatically remove the last skill from the "skills" array inside the "me" object.
*/

delete me.skills.pop()

console.log(me)