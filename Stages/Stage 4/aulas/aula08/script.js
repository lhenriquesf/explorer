/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/

let patients = [
    {
        name: "Luiz",
        age: 23,
        weight: 85,
        height: 1.80
    },
    {
        name: "Igor",
        age: 20,
        weight: 70,
        height: 1.70
    },
    {
        name: "Marcus",
        age: 15,
        weight: 80,
        height: 1.80
    }
]

let patientsName = []
let patientsAge = []

for(let patient of patients){
    patientsName.push(patient.name)
    
}

console.log(patientsName, patientsAge)
