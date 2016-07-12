/**
 * Created by bld_aalarcon on 12/07/16.
 */

/* --- To test these scripts, use the Chrome Inspector --- */

// --- Variable creation --- //
var localVariable; //undefined
localVariable = 'oh right'; //"oh right"

var localVariable2 = "that's right too"; //"that's right too"

//tries to print the value of this variable, but it's not created yet, it's NOT correct
globalVariable; //Uncaught ReferenceError: globalVariable is not defined

//it creates a global variable because it has not the 'var' keyword declaration
globalVariable2 = "well it works, but it's not recommended"; //"well it works, but it's not recommended"
// --- Variable creation --- //



// --- Operations and concatenations --- //
3*4; //12

var firstNumber = 2; //undefined
var secondNumber = 4; //undefined

firstNumber + secondNumber; //6

var sum = firstNumber + secondNumber; //undefined

sum; //6

//In javascript you can sum different variable types
var sumResult = 'The sum of ' + firstNumber + ' and ' + secondNumber + ' equals ' + sum; //undefined

sumResult; //"The sum of 2 and 4 equals 6"

var x = 5; //undefined
// equal to ==
console.log(x == 5);   // true
console.log(x == 8);   // false
console.log(x == "5"); // true
// equal value and equal type ===
console.log(x === 5); //true
console.log(x === "5"); // false
// not equal !=
console.log(x != 8); // true
// not equal value or not equal type !==
console.log(x !== 5); // false
console.log(x !== "5"); // true
console.log(x !== 8); // true
// --- Operations and concatenations --- //



// --- Single and Double Quotes usage --- //
var nickName1 = "I'm a programmer and my nickname is 'Geek' for that reason"; //undefined
nickName1; //"I'm a programmer and my nickname is 'Geek' for that reason"

var nickName2 = 'I\'m a programmer and my nickname is \'Geek\' for that reason'; //undefined
nickName2; //"I'm a programmer and my nickname is 'Geek' for that reason"

var nickName3 = 'I\'m a programmer and my nickname is "Geek" for that reason'; //undefined
nickName3; //"I'm a programmer and my nickname is "Geek" for that reason"
// --- Single and Double Quotes usage --- //



// --- Arrays and objects --- //
var rockBands = ['The Beatles', 'Rolling Stones', 'Pink Floyd']; //undefined
rockBands; //["The Beatles", "Rolling Stones", "Pink Floyd"]
rockBands[0]; //"The Beatles"
rockBands[2]; //"Pink Floyd"

var dog= {color: 'Brown', age: 4, breed: 'Boxer'}; //undefined
dog; // Object {color: "Brown", age: 4, breed: "Boxer"}
dog.color; // "Brown"
dog.age; // 4
dog.breed; // "Boxer"

var dog = { color: 'Brown',
    age: 4,
    breed: 'Boxer',
    bark: function() {
        console.log('Guau guau')
    }}; //undefined
dog.bark(); //Guau guau
// --- Arrays and objects --- //



// --- Conditionals and loops --- //
var myNumber = 4; // 4
if (myNumber === 5) {
    console.log('The number is equal to five');
}
else {
    console.log('The number is NOT equal to five');
} // The number is NOT equal to five

for (var i = 0; i < rockBands.length; i++) {
    console.log('Band #' + i + ' is ' + rockBands[i]);
} // Band #0 is The Beatles
// Band #1 is Rolling Stones
// Band #2 is Pink Floyd

var i = 0; // undefined
do {
    console.log('Band #' + i + ' is ' + rockBands[i]);
    i++;
} while (i < rockBands.length); // Band #0 is The Beatles
// Band #1 is Rolling Stones
// Band #2 is Pink Floyd
// --- Conditionals and loops --- //



// --- Functions --- //
function sum(firstNumber,secondNumber) {
    var mySum = firstNumber + secondNumber;
    return 'The sum of ' + firstNumber + ' and ' + secondNumber + ' equals ' + mySum;
} // undefined

sum(2, 4); // "The sum of 2 and 4 equals 6"
sum(-5, -9); // "The sum of -5 and -9 equals -14"
// --- Functions --- //