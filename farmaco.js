function calculoLiquido() {
    let peso = document.getElementById('pesoAnimal').value

    let concentracaoLiquida = document.getElementById('concentracaoLiquida').value
    let doseLiquida = document.getElementById('doseLiquida')

    let resLiquida = peso * concentracaoLiquida;

    doseLiquida.innerHTML = `${resLiquida} ml`;
}


function calculoComprimido() {
    let fracao = document.getElementById('fracao')
    let peso = document.getElementById('pesoAnimal').value

    let doseKilo = document.getElementById('doseKilo').value
    let doseComprimido = document.getElementById('doseComprimido')
    let concentracaoComprimido = document.getElementById('concentracaoComprimido').value

    let dose = (peso * doseKilo) / concentracaoComprimido;

    
    if (dose > 1) {
    doseComprimido.innerHTML = `${dose} comprimidos`;
    // doseComprimido.innerHTML = `${dose} mg`;
    } else {
        doseComprimido.innerHTML = `${dose} comprimido`;
    }

    if (dose < 1) {

        // DECIMAL EM FRAÇÃO ==================================================
        let doseString = dose.toString();
        // let doseString = '0.18';


        let partes = doseString.split('.');

        let numerador = parseFloat(doseString.replace('.', ''));

        let multDez = partes[1].length;
        let denominador = Math.pow(10, multDez);

        console.log('##################################################');
        console.log('MULTDEZ TIPO = ' + typeof (multDez));
        console.log(partes[1]);
        console.log('##################################################');


        console.log('----- TESTE - DECIMO EM FRACAO ----- ');
        console.log('NUMERADOR: ' + numerador);
        console.log('DENOMINADOR: ' + denominador);
        console.log('------------------- ');


        // SIMPLIFICAR EM FRAÇÃO ==================================================
        for (var i = Math.max(numerador, denominador); i > 1; i--) {
            if ((numerador % i == 0) && (denominador % i == 0)) {
                numerador /= i;
                denominador /= i;
            }
        }

        fracao.innerHTML = `${numerador} / ${denominador} do comprimido`
    } else {
        fracao.innerHTML = `.`

    }
}






// console.log('========== SIMPLIFICADO ==========');
// console.log('NUMERADOR:   ' + numerador);
// console.log('DENOMINADOR: ' + denominador);




fracao.innerHTML = `${numerador} / ${denominador} do comprimido`




/** TESTE DOSE COMPRIMIDO
 * 
 * ( EXEMPLO 1)
 * Peso = 6kg
 * Concentrações por KG: 2mg
 * Dose = 2mg * 6Kg = 12mg
 * 
 * Melhor apresentação de 6mg/ comprimido
 * Seria administrado 2 comprimidos
 * 
 * Apresentações comprimido (Dose por comprimido)
 * - 6mg   comprimido
 * - 20mg  comprimido
 * - 30mg  comprimido
 * - 75mg  comprimido
 * - 95mg  comprimido
 * 
 * FORMULA
 *  (dose * peso = doseTotal) / Concentração do farmaco
 * 
 * ( EXEMPLO 2)
 * 
 * Peso = 6kg
 * Dose = 0,5 mg/kg
 * Concentrações por KG: 5mg/ml
 * 
 * 6 * 0.5 / 5 = 0.6 mg
 * 
 */



/*
Calcular a quantidade de comprimidos


*/