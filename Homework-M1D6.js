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

/* Ex.1
    Write a function called "dice"; it should randomize an integer number between 1 and 6.
*/
function dice(n) {
    return Math.floor((Math.random(n)*6) + 1);
}
console.log(dice(0))

/* Ex.2 
    Write a function called "whoIsBigger" which receives 2 numbers as parameters and returns the biggest one.
*/

function whoIsBigger(a, b){
    if (a > b) {
        console.log(a + " is larger than " + b);
    } else {
        console.log(a + " is less than " + b);
    }
    return;
    }
    console.log(whoIsBigger(7, 6))
    
/* Ex.3
    Write a function called "splitMe" which receives a string as
    a parameter and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/
function splitMe() {
    var str = "How are you doing today?";
    var res = str.split(" ");
    return res
}
console.log(splitMe())
/* Ex.4
    Write a function called "deleteOne" which receives a string and a boolean as parameters. 
    If the boolean value is true it should return the string without the first letter, 
    otherwise it should remove the last one from it.
*/

function deleteOne(a, b) {
    if (a === true) {
        return a.substring(0)
    }
    else {
        return a.slice(0, -1)
    }
}
console.log(deleteOne("Ciao"))

/* Ex.5
   Write a function called "onlyLetters" which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs")  => returns "I have  dogs"
*/



/* Ex.6 
   Write a function called "isThisAnEmail" which receives a string as a parameter
    and returns true if the string is a valid email address.
*/

function isThisAnEmail(email) {
    let newvar = /\S+@\S+\.\S+/;
    return newvar.test(email);
}
console.log(isThisAnEmail("emanuelefurlani.go@gmail.com"));
console.log(isThisAnEmail("emanuelefurlani.gogmail.com"));

/* Ex.7
   Write a function called "whatDayIsIt" that should return the current day of the week.
*/

function whatDayIsIt() {
    var x = new Date();
    var n = x.getFullYear()+"-"+(x.getMonth()+1)+"-"+x.getDate()
    return n
  }
console.log(whatDayIsIt())
/* Ex.8
    Write a function called "rollTheDices" which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a "sum" property holding the sum of all values extracted
    and a "values" array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/

/*function dice(n) {
    return Math.floor((Math.random(n)*6) + 1);
}
console.log(dice(0))*/


/* Ex.9
   Write a function called "howManyDays" which receives a date as a
    parameter and should return the number of days passed since that date.
*/

function howManyDays() {
    let date1 = new Date("06/30/2020");
    let date2 = new Date("07/30/2020");
let DifferenceInTime = date2.getTime() - date1.getTime();
let DifferenceInDays = DifferenceInTime / (1000 * 3600 * 24);
return DifferenceInDays
}
console.log(howManyDays())
 


/* Ex.10
   Write a function called "isTodayMyBirthday" which should return true if today's your birthday, false otherwise.
*/
let dateOfBirth = 28
function isTodayMyBirthday(dateOfBirth) {
    if (dateOfBirth === whatDayIsIt()) {
        return true
    }
    else {
        return false
    }
}
console.log(isTodayMyBirthday(dateOfBirth))

// JS Arrays // Objs
// NOTE: movies array is defined at the end of this file!

/* Ex.11
   Write a function called "deleteProp" which receives an object and a string as parameters, 
   and returns the given object after deleting its property named as the given string.
*/

/* Ex.12 
    Write a function called "olderMovie" which finds the oldest movie in the array provided at the end of this file.
*/

/* Ex.13
    Write a function called "countMovies" which returns the number of movies contained in the array provided at the end of this file.
*/

/* Ex.14
    Write a function called "onlyTheTitles" which creates an array with just the titles of the movies provided in the array at the end of the file.
*/

/* Ex.15
   Write a function called "onlyInThisMillennium" which returns only the movies produced in this millennium.
*/

/* Ex.16 
    Write a function called "getMovieById" which receives an id as a parameter and returns the movie with the given id.
*/

/* Ex.17
    Write a function called "sumAllTheYears" which returns the sum of all the years in which the movies provided have been produced.
*/

/* Ex.18
    Write a function called "searchByTitle" which receives a string as a parameter and returns all the movies which contain that string in the title.
*/

/* Ex.19
    Write a function called "searchAndDivide" which receives a string as a parameter and returns an object;
    this object should contain an array called "match", made by all the movies which contain the given string in the title,
    and another array "unmatch" with all the remaining ones.
*/

/* Ex.20
   Write a function called "removeIndex" which receives a number as a parameter and returns the movies array without the element in the given position.*/