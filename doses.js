let divMedicamentos = document.getElementById("selectMedicamentos")
let divDose = document.getElementById("doseKilo")

fetch("doses.json").then((response) => {
    return response.json();
}).then((dados) => {
    dados.medicamentos.map((medicamento) => {
        divMedicamentos.innerHTML += `<option value="${medicamento.doseKilo}"> ${medicamento.nome} - ${medicamento.doseKilo}</option>`
        console.log(medicamento);
        console.log("==============================");
        console.log(medicamento.doseKilo);

    })
}).catch((error) => {
    console.error('Algo deu errado!');
    console.error(error);
});


function optionSelecionado() {

    let select = document.getElementById('selectMedicamentos');
    let optionValue = select.options[select.selectedIndex];
    let pesoAnimal = document.getElementById('pesoAnimal').value;
    //let frequencia
    //let via

    let value = 0;
    value = optionValue.value;
    value = value * pesoAnimal;
    console.log(value);
    
    
    
        divDose.innerHTML = ` Dose: ${value} ml`;
    
}

optionSelecionado();







// let divMedicamentos = document.getElementById("medicamentos")


// fetch("doses.json")
//     .then((response) => {
//         response.json()
//     .then((dados) => {
//         console.log(dados.medicamentos);
//         dados.medicamentos.map((medicamento)=>{
//             console.log(medicamento);
//             divMedicamentos.innerHTML += `${medicamento.nome}
//             Dose Kilo: ${medicamento.doseKilo}
//             Frequência: ${medicamento.frequencia}
//             Via: ${medicamento.via}</br>`
//         }) 
// divMedicamentos.innerHTML = dados.nome
//     })
// })


// fetch("doses.json")
//     .then((response) => {
//         response.json()
//     .then((medicamentos) => {
//         console.log(medicamentos);
//         divMedicamentos.innerHTML
//     })
// })