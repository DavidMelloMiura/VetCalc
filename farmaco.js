function calculoLiquido() {
    let peso = document.getElementById('pesoAnimal').value

    let concentracaoLiquida = document.getElementById('concentracaoLiquida').value
    let doseLiquida = document.getElementById('doseLiquida')

    let resLiquida = peso * concentracaoLiquida;

    doseLiquida.innerHTML = `${resLiquida} ml`;
}

function calculoComprimido() {
    let peso = document.getElementById('pesoAnimal').value

    let doseKilo = document.getElementById('doseKilo').value
    let doseComprimido = document.getElementById('doseComprimido')
    let concentracaoComprimido = document.getElementById('concentracaoComprimido').value
    let fracao = document.getElementById('fracao')

    let dose = (peso * doseKilo) / concentracaoComprimido;

    doseComprimido.innerHTML = `${dose} mg`;


    // FRACAO
    let partes = dose.toString();
    const dados = partes.split('.');

    let numerador = dados[1];
    let multDez = dados[1].length;
    let denominador = Math.pow(10, multDez);

    function mdc(num, den) {
        let resto;
        do {
            resto = num % den;

            num = den;
            den = resto;
        } while (resto != 0);
        return num + den;
    }

    let nume = numerador / mdc(numerador, denominador);
    let deno = denominador / mdc(numerador, denominador);

    fracao.innerHTML = `${nume} / ${deno} do comprimido`


    console.log("------- MDC -------");
    console.log(mdc(numerador, denominador));
    console.log('--------------------');

    



   


}



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






