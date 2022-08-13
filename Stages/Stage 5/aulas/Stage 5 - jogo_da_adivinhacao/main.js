const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
const randomNumber = Math.round(Math.random()*10)
let xAttempts = 1

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', enterKey)

function handleTryClick(e){
    e.preventDefault()

    const inputNumber = document.querySelector('#inputNumber')

    if(Number(inputNumber.value) == randomNumber){
        toggleScreen()
        screen2.querySelector('h2').innerText = `acertou em ${xAttempts} tentativas`
    }

    // inputNumber.value = ''

    xAttempts++
}

function handleResetClick(){
    toggleScreen()
    xAttempts = 1
    inputNumber.value = ''
}

function toggleScreen(){
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}

function enterKey(e){
    if((e.key == 'Enter') && (screen1.classList.contains('hide'))){
        handleResetClick()
    }
}
