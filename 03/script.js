let firstNumber = prompt('Write a number')
let secondNumber = prompt('Write an second number')

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

const sum = firstNumber + secondNumber;
const sub = firstNumber - secondNumber;
const multi = firstNumber * secondNumber;
const div = firstNumber / secondNumber;
const restDiv = firstNumber % secondNumber;

alert(
    'Soma: ' + sum + 
    'Subtração: ' + sub + 
    'Multiplicação: ' + multi + 
    'Divisão: ' + div + 
    'Resto da divisão: ' + restDiv
);

alert(`Sum ${sum}, Sub ${sub}, Multi ${multi}, Div ${div}, restDiv ${restDiv}`);