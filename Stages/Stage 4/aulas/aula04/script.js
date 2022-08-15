/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os 
  parabéns.

  Se o aluno não passou no bimestre, 
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

let nameStudent = prompt("Informe seu nome: ")
let gradeOne = Number(prompt("Primeira nota: "))
let gradeTwo = Number(prompt("Segunda nota: "))
let gradeThree = Number(prompt("Terceira nota: "))

let gradeResult = (gradeOne + gradeTwo + gradeThree) / 3

gradeResult = gradeResult.toFixed(2)

if(gradeResult > 6){
    alert(`Parabens ${nameStudent} voce passou, sua nota foi ${gradeResult}`)
} else {
    alert(`Reprovado ${nameStudent}, melhor estudar mais para recuperacao. Sua nota foi ${gradeResult}`)
}


// CODIGO DO MAYK
/*
let student = prompt("Qual o nome do(a) aluno(a)?")
let n1 = prompt("Qual a nota da primeira prova?")
let n2 = prompt("Qual a nota da segunda prova?")
let n3 = prompt("Qual a nota da terceira prova?")

let average = (Number(n1) + Number(n2) + Number(n3)) / 3

let result = average > 6

average = average.toFixed(2)

if (result) {
  alert("Parabéns, " + student + "! Sua média foi de: " + average)
} else if (average < 3) {
  alert("Reprovado")
} else {
  alert(student + " estude para sua prova de recuperação! Sua média foi de: " +  average)
}
*/
