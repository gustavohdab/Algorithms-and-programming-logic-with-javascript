# Boas práticas na escrita de variáveis

*Em inglês
*Sem espaços ou acentuações especiais no nome
*Não pode iniciar com número
*Utilizar camelCase
*ponto e vírgula servem para finalizar uma expressão de código (facultativo)
*Aprendemos:

[] Tipo de dado: Number
[] typeof
[] Operador matemático
[] Manipulação de dados
    [] type conversion (type casting)
    [] Number() (função construtora para converter um dado em número)
    [] String() (função construtora para converter um dado em uma string)
[] Ordem de precedência dos operadores
[] group operator

Código da aula:

```js
alert("Iremos somar 2 números")
let numberOne = prompt("Digite o primeiro número:")
let numberTwo = prompt("Digite o segundo número:")
let result = Number(numberOne) + Number(numberTwo)
alert("Resultado final: " + result)
