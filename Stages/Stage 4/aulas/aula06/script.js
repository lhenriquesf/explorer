/*
  ** Jogo da advinhação **

  Apresente a mensagem ao usuário:
  "Advinhe o número que estou pensando? Está entre 0 e 10"

  Crie um lógica para gerar um número aleatório 
  e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

  Enquanto o usuário não adivinhar o número, mostrar a mensagem:
  "Erro, tente novamente:"

  Caso o usuário acerte o número, apresentar a mensagem:
  "Parabéns! Você advinhou o número em x tentativas"

  Substitua o "x" da mensagem, pelo número de tentativas
*/

let result = prompt("Advinhe o número que estou pensando. Está entre 0 e 10")
const randomNumber = Math.round(Math.random()*10)

let xAttempts = 1

while(Number(result) != randomNumber){
    result = prompt("Voce errou, tente novamente:")
    xAttempts++
}

alert(`Acertou o numero ${randomNumber} em ${xAttempts} tentativas`)


function sayMyName(name=''){
  if(name === ''){
    throw 'Precisa do nome'
  }

  return name
}

// try{
//   sayMyName()
// } catch(e){
//   console.log(e)
// }

console.log(sayMyName())


let arr = [1,2,3,4]
let soma = 0

for(let i of arr){
  soma+=i
}
console.log(soma)