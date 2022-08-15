/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura * altura) */

const patients = [
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

const calculationIMC = (height, weight) => {
    let patientIMC = (weight / (height**2)).toFixed(2)
    return patientIMC
}

const printPatientIMC = function(patient){
    return `Paciente ${patient.name}, tem o IMC de ${calculationIMC(patient.height, patient.weight)}`
}

for(let patient of patients){
    let printIMC = printPatientIMC(patient)
    console.log(printIMC)
}
