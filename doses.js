let divMedicamentos = document.getElementById("selectMedicamentos")
let divDose = document.getElementById("doseKilo")

let divVia = document.getElementById("via")
let divFreq = document.getElementById("frequencia")



fetch("doses.json")
.then((response) => response.json())
.then(dados => {
    dados.medicamentos.map((medicamento) => {
        divMedicamentos.innerHTML += `<option value="${medicamento.via, medicamento.doseKilo}"> ${medicamento.nome} - ${medicamento.doseKilo} ml/Kg - ${medicamento.via} - ${medicamento.frequencia}</option>`
        console.log(medicamento);


        // console.log("==============================");
        // console.log("Medicamento: " + medicamento.nome);
        // console.log("Dose/ Kilo: " + medicamento.doseKilo);
        // console.log("Via: " + medicamento.via);
        // console.log("Frequencia: " + medicamento.frequencia);
        // console.log("==============================");
        
        // FAZER INPUT NA DIV DAQUI
        // console.log("=============DADOS=============");
        // console.log(dados.medicamentos[value].via);
        // console.log(dados.medicamentos[0].frequencia);
        // console.log("==============================");
        
        // divVia.innerHTML = dados.medicamentos[2].frequencia;
        // divVia.innerHTML = dados.medicamento[1].nome;
                
        // console.log(' ========== AQUI ==========');
        // console.log(dados.medicamentos);
        

        // console.log(' ========== JSON convertido para ARRAY ==========');
        // let arrayMed = [];
        // for (let chave in dados) {
        //     if (Array.isArray(dados[chave])) {
        //         arrayMed.push(...dados[chave]);
        //     }
        // }
        // console.log(JSON.stringify(arrayMed));
        
        console.log(' ========== JSON convertido para ARRAY -  Método Object.values() ==========');
        
        const arrayDados = Object.values(dados);
        let dado1 = arrayDados[0][1].nome;
        // console.log(dados.medicamentos[1].nome);
        console.log(dado1);
        
        

        // console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');
        // console.log(dados.medicamentos[2].via);
        
    })
}).catch((error) => {
    console.error('Algo deu errado!');
    console.error(error);
    });



// ################################################ VER LINHA 68 - Como selecionar segundo value do option
// ###### https://pt.stackoverflow.com/questions/272220/como-armazeno-v%C3%A1rios-valores-em-cada-option-de-um-select

function optionSelecionado() {

    let select = document.getElementById('selectMedicamentos');
    let optionValue = select.options[select.selectedIndex].value;
    
    let pesoAnimal = document.getElementById('pesoAnimal').value;
    
    // let value = 0;
    value = optionValue;
    value = value * pesoAnimal;
    
    // divDose.innerHTML = `${value} ml`;
    value ? divDose.innerHTML = `${value} ml` : divDose.innerHTML = '-'

    
    
    
    
    
    // ##################################################
    let optionText = select.options[select.selectedIndex].text;
    // let optionText = select.options[select.selectedIndex].getAttribute('via');
    console.log("optionText = " + optionText);

    console.log('----- SPLIT -----');
    dadosplit = optionText.split(' - ')
    let via = dadosplit[2];
    console.log(dadosplit[2]);
    let frequencia = dadosplit[3];
    console.log('-----------------');
    
    

    

    // CONDICIONAL TERNARIO
    via ? divVia.innerHTML = via : divVia.innerHTML = '-'; 

    frequencia ? divFreq.innerHTML = frequencia : divFreq.innerHTML = '-'
    // divFreq.innerHTML = frequencia;

    
    // if (pesoAnimal) {
    //     alert("Digite o Peso do Animal");
    // }




    // let via = select.options[select.selectedIndex].value;
    // ERRO
    // Saindo como - [object HTMLOptionElement] - Ver se tem que converter - pesquisar
    // via = optionValue.value;
    // console.log(via);
    
    // Se tirar essa linha aparece a dose
    
    
    // TESTE
    // divVia.innerHTML = via;
    
    
    // divVia.innerHTML = `${via}`
    // divVia.innerHTML = via;
    
    // divVia.innerHTML = `${medicamento.nome}`
    // divVia.innerHTML += `TESTE VIA ${medicamento.nome}`
    
    
}


optionSelecionado();
