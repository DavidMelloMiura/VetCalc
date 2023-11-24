let divMedicamentos = document.getElementById("selectMedicamentos")
let divDose = document.getElementById("doseKilo")
let divVia = document.getElementById("via")
let divFreq = document.getElementById("frequencia")


fetch("doses.json")
.then((response) => response.json())
.then(dados => {
    dados.medicamentos.map((medicamento) => {
        
        divMedicamentos.innerHTML += `<option value="${medicamento.nome} - ${medicamento.doseKilo} - ${medicamento.via} - ${medicamento.frequencia} - ${medicamento.unidade}"> ${medicamento.nome} - ${medicamento.doseKilo} / kg</option>`
        // divMedicamentos.innerHTML += `<option value="${medicamento.nome} - ${medicamento.doseKilo} - ${medicamento.via} - ${medicamento.frequencia}"> ${medicamento.nome} ( ${medicamento.doseKilo[0]} - ${medicamento.doseKilo[1]} ml/Kg )</option>`
        console.log(medicamento);
        


        // FAZER INPUT NA DIV DAQUI
        // console.log("=============DADOS=============");
        // console.log(dados.medicamentos[value].via);
        // console.log(dados.medicamentos[0].frequencia);
        // console.log("==============================");
        
        // divVia.innerHTML = dados.medicamentos[2].frequencia;
        // divVia.innerHTML = dados.medicamento[1].nome;
                


        // console.log(' ========== JSON convertido para ARRAY ==========');
        // let arrayMed = [];
        // for (let chave in dados) {
        //     if (Array.isArray(dados[chave])) {
        //         arrayMed.push(...dados[chave]);
        //     }
        // }
        // console.log(JSON.stringify(arrayMed));
        
        // console.log(' ========== JSON convertido para ARRAY -  Método Object.values() ==========');
        
        // const arrayDados = Object.values(dados);
        // let dado1 = arrayDados[0][1].nome;
        // // console.log(dados.medicamentos[1].nome);
        // console.log(dado1);
        
        // console.log(dados.medicamentos[2].via);
        
    })
}).catch((error) => {
    console.error('Algo deu errado!');
    console.error(error);
    });


    // function validacao() {
    //     if(document.getElementById("pesoAnimal").value ==  ""){
    //         alert('Por favor, preencha o Peso do Animal');
    //         document.getElementById("pesoAnimal").focus();
    //         return false
    //     }
            
    // }

    


function optionSelecionado() {

    let select = document.getElementById('selectMedicamentos');
    let optionValue = select.options[select.selectedIndex].value;
    let pesoAnimal = document.getElementById('pesoAnimal').value;
    
    
    // Split
    splitdados = optionValue.split(' - ')
    let dose = splitdados[1];
    let unidade = splitdados[4];


    console.log("---------- TESTE UNIDADE ----------");
    console.log(unidade);
    
    value = pesoAnimal * dose;


    let doses = dose.split(',');
    let min = doses[0] * pesoAnimal;
    let max = doses[1] * pesoAnimal;
        
    // value = optionValue;
    // value = value * pesoAnimal;
    
    // CONDICIONAL TERNARIO - DOM
    isNaN(max) ? divDose.innerHTML = `${min} ${unidade}` : divDose.innerHTML = `${min} - ${max} ${unidade}`;

    // console.log('MIN: '+ isNaN(min));
    // console.log('MAX: '+ isNaN(max));
    

    // Certo - só que abre quando carrega a página
    // const peso = pesoAnimal;
    if (pesoAnimal) {
        console.log('OK');
    } else {
        abrirAlerta();
    }
    

    // RESULTADOS - Via e Frequencia

    let optionText = select.options[select.selectedIndex].value;
    // let optionText = select.options[select.selectedIndex].getAttribute('via');
    
    // console.log("optionText = " + optionText);

    // Split
    dadosplit = optionText.split(' - ')
    let via = dadosplit[2];
    
    let frequencia = dadosplit[3];
    

    
    
    // validacao();
    // if (!pesoAnimal) {
    //     alert("Digite o Peso do Animal");
    // }

    

    // CONDICIONAL TERNARIO - DOM
    via ? divVia.innerHTML = via : divVia.innerHTML = '-'; 

    frequencia ? divFreq.innerHTML = frequencia : divFreq.innerHTML = '-'
    
}

optionSelecionado();




function abrirAlerta() {
    swal({
        title: "Digite o peso do Animal!",
        // text: "Digite o peso do Animal!",
        icon: "warning"
    });
}