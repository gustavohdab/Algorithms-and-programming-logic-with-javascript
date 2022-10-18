let result = prompt("Advinhe o número que estou pensando? Está entre 0 e 10")
const randomNumber = Math.round(Math.random() * 10)

let inXAttempts = 1;
let attemptMessage = "tentativa"

while (Number(result) != randomNumber) {
    result = prompt(`Pensei em outro número, que pena! Tente novamente:`)
    inXAttempts++;
}

if (inXAttempts <= 1){
    alert(`Que fera, de primeira! ${randomNumber} e você acertou com ${inXAttempts} única tentativa! Top!`)
} else if(inXAttempts <= 4){
    alert(`Boaa, menos de 5 tentativas, o número era ${randomNumber} e você acertou com ${inXAttempts} tentativas!`)
} else {
    alert(`Parabéns, o número em que eu estive pensando era ${randomNumber} e você acertou em ${inXAttempts} tentativas!`)
}