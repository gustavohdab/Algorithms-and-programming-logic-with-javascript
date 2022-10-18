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

let patientsNames = []

for (const patient of patients) {
    patientsNames.push(patient.name, patient.age, patient.weight, patient.height)
    alert(`Patient: ${patient.name}, age: ${patient.age}, weight: ${patient.weight}, height: ${patient.height},`)
}

// alert(`Patients ${patient.name}, age: ${patient.age}, weight: ${patient.weight}, height: ${patient.height},`)


