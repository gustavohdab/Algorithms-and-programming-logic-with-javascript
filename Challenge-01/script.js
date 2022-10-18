/*
    I'll ask for the user to enter two numbers and then calculate:

    the sum of the two numbers
    the subtration of the two numbers
    the multi of the two numbers
    the div of the two numbers
    the rest of div between the two numbers

    then check if the sum between the two numbers is even or odd.
    check if both numbers are equal or not equal.

*/

// delcared variables.

let firstNumber = prompt("Enter a number: ");
let secondNumber = prompt("Enter an second number: ");

let sum = firstNumber + secondNumber;
let sub = firstNumber - secondNumber;
let multi = firstNumber * secondNumber;
let div = firstNumber / secondNumber;
let restDiv = firstNumber % secondNumber;
let evenOrOdd = sum % 2 == 0 ? 'even' : 'odd'; // par ou impar
let equalOrNotEqual = firstNumber == secondNumber ? 'equal' : 'not equal'; // igual ou diferente.

alert(`
    The sum of the two numbers is: ${sum}
    The sub of the two numbers is: ${sub}
    The multi of the two numbers is: ${multi}
    The div of the two numbers is: ${div}
    The rest of divison between those two numbers is: ${restDiv}
    The sum between ${firstNumber} and ${secondNumber} is: ${evenOrOdd}
    ${firstNumber} and ${secondNumber} are: ${equalOrNotEqual}
`)

