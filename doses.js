let divMedicamentos = document.getElementById("selectMedicamentos")
let divDose = document.getElementById("doseKilo")

let divVia = document.getElementById("via")

fetch("doses.json").then((response) => {
    return response.json();
}).then((dados) => {
    dados.medicamentos.map((medicamento) => {
        divMedicamentos.innerHTML += `<option value="${medicamento.doseKilo}"> ${medicamento.nome} - ${medicamento.doseKilo} ml/Kg </option>`
        console.log(medicamento);
        console.log("==============================");
        console.log(medicamento.doseKilo);

        // divVia.innerHTML = `${medicamento.nome}`        
    })
}).catch((error) => {
    console.error('Algo deu errado!');
    console.error(error);
});


function optionSelecionado() {
    
    let select = document.getElementById('selectMedicamentos');
    let optionValue = select.options[select.selectedIndex];

    let pesoAnimal = document.getElementById('pesoAnimal').value;
    
    
    // let value = 0;
    value = optionValue.value;
    value = value * pesoAnimal;
    console.log(value);
    
    divDose.innerHTML = `${value} ml`;
    
    
    via = optionValue = select.options[select.selectedIndex];

    
    
    
    // divVia.innerHTML = `${medicamento.nome}`
    divVia.innerHTML = `TESTE VIA ${via}`
    
    
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