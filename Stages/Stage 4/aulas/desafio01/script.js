/*
- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números; 

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.
*/

const calculateNumbers = ()=>{

    const sumNum = function(number1,number2){
        return number1 + number2
    }
    
    const subNum = function(number1,number2){
        return number1 - number2
    }
    
    const multiNum = function(number1,number2){
        return number1 * number2
    }
    
    const divNum = function(number1,number2){
        return (number1 / number2).toFixed(2)
    }
    
    const restNum = function(number1,number2){
        return number1 % number2
    }
    
    const isParouImpar = function(number){
        if(number%2 == 0){
            return `A soma dos dois numeros e par: ${sumNum(numberOne, numberTwo)}`
        }
        else {
            return `A soma dos dois numeros e impar: ${sumNum(numberOne, numberTwo)}`
        }
    }
    
    const isIgual = function(number1,number2){
        if(number1==number2){
            return `Os numeros inseridos sao iguais: ${number1}`
        }else {
            return `Os numeros inseridos sao diferentes: ${number1} e ${number2}`
        }
    }
    
    let numberOne = Number(prompt("Digite o primeiro numero: "))
    let numberTwo = Number(prompt("Digite o segundo numero: "))
    
    alert(`Soma dos numeros: ${sumNum(numberOne, numberTwo)}`)
    alert(`Subtracao dos numeros: ${subNum(numberOne, numberTwo)}`)
    alert(`Multiplicacao dos numeros: ${multiNum(numberOne, numberTwo)}`)
    alert(`Divisao dos numeros: ${divNum(numberOne, numberTwo)}`)
    alert(`Resto da divisao dos numeros: ${restNum(numberOne, numberTwo)}`)
    alert(isParouImpar(sumNum(numberOne, numberTwo)))
    alert(isIgual(numberOne, numberTwo))
}
calculateNumbers()
