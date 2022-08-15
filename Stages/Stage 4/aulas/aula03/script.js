/*
  Capturar 2 números
  e fazer as operações matemáticas
  de soma, subtração, multiplicação,
  divisão e resto da divisão.

  E para cada operação, mostrar um alerta
  com o resultado.
*/

let firstNumber = Number(prompt('Digite o primeiro número'))
let secondNumber = Number(prompt('Digite o segundo número'))

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert(`Soma ${sum}`)
alert(`Subtracao ${sub}`)
alert(`Multiplicacao ${multi}`)
alert(`Dvivisao ${div}`)
alert(`Resto ${restDiv}`)


let age = 5

const canDriver = age >= 18 ? 'Can drive' : 'Cant drive boy'
console.log(canDriver)
