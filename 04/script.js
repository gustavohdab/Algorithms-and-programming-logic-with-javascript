let student = prompt("What is the student's name?");

let n1 = prompt("What is his first test score? ");
let n2 = prompt("What is his second test score? ");
let n3 = prompt("What is his third test score? ");

let average = (Number(n1) + Number(n2) + Number(n3)) / 3;

let result = average > 6

average = average.toFixed(1);

if (result) {
    alert("Hi " + student + " your final score is " + average + "! APPROVED! Congratulations!");
} else if (average < 3) {
    alert("REPROVED")
}
else {
    alert("Hi " + student + " your final score is " + average + "! Reproved! Try your best on next text.");
}