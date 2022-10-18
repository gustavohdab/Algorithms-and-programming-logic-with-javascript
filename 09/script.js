const patients = [
    {
        name: 'John',
        age: 21,
        weight: 100,
        height: 170,
    },
    {
        name: 'Carlos',
        age: 21,
        weight: 100,
        height: 170,
    },
    {
        name: 'Matias',
        age: 21,
        weight: 100,
        height: 170,
    }
]
function IMC(weight, height) {
    return weight / ((height /100) ** 2);
}

const patientIMC = (patient) =>{
    return `
    Patient ${patient.name}, has an IMC of ${IMC(patient.weight, patient.height).toFixed(1)}
`
}

for (let patient of patients) {
    let IMCmessage = patientIMC(patient)
    alert(IMCmessage)
}