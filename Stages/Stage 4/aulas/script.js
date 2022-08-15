/*
Bora praticar e rever tudo o que foi ensinado na aula? **💜**

Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

const calculateGrade = ()=>{
    const students = [
        {
            name: "Luiz",
            gradeOne: 9.5,
            gradeTwo: 6
        },
        {
            name: "Rafaela",
            gradeOne: 7,
            gradeTwo: 5
        },
        {
            name: "Marcelo",
            gradeOne: 4,
            gradeTwo: 10
        },
        {
            name: "Andressa",
            gradeOne: 2,
            gradeTwo: 1.6
        }
    ]
    
    const calculateAverage = function(grade1, grade2){
        let average = ((grade1 + grade2)/2).toFixed(2)
        return average
    }
    
    const printStudentAvarage = function(student){
        return `A média do aluno(a) ${student.name} é: ${calculateAverage(student.gradeOne, student.gradeTwo)}\n${isPassed(calculateAverage(student.gradeOne, student.gradeTwo),student)}\n`
    }
    
    const isPassed = function(average, student){
        if(average > 6){
            return `Parabéns ${student.name} você foi aprovado(a) no concurso!`
        }else {
           return `Não foi desta vez ${student.name}. Tente novamente!`
        }
    }
    
    const printStudentName = function(student){
        return student.name
    }
    
    for(let student of students){
        let printAvarage = printStudentAvarage(student)
        console.log(printAvarage)
    }
}
calculateGrade()
