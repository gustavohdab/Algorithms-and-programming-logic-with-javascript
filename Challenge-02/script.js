/*
    i'll create an list of students and each estudant on this list need to has the following properties:
    name;
    score of fisrt test:
    score of second test:

    after the list is created:
    make an function that will calculate the average score of each student.
    if the average score is >=7 check if the student succeeds or fails to enter the concurse, and show up a message on screen.
*/

let students = [
    {
        name: 'Matthew',
        firstTestScore: 7,
        secondTestScore: 10,
    },
    {
        name: 'John',
        firstTestScore: 4,
        secondTestScore: 6,
    },
    {
        name: 'Diosh',
        firstTestScore: 7,
        secondTestScore: 4,
    },
    {
        name: 'Yondy',
        firstTestScore: 8.5,
        secondTestScore: 4.5,
    },
    {
        name: 'Baptista',
        firstTestScore: 6.5,
        secondTestScore: 10,
    },
]


students.forEach((student) => {
    let average = ((student.firstTestScore + student.secondTestScore) / 2).toFixed(1);

    if (average < 7) {
        alert(`Hey ${student.name}, your average score is: ${average}! You're desqualified.`)
    } else {
        alert(`Hey ${student.name}, your average score is: ${average}! You're qualified.`)
    }
})











