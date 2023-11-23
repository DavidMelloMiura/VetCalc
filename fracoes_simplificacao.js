let dose = '0.5';
// let dose = '0.085';

// DECIMAL EM FRAÇÃO ==================================================

let partes = dose.split('.');
let numeradorString = partes[1];
let numerador = parseFloat(dose.replace('.', ''));

let multDez = partes[1].length;
let denominador = Math.pow(10, multDez);


console.log('----- TESTE ----- ');
console.log('NUMERADOR: ' + numerador);
console.log('DENOMINADOR: ' +  denominador);
console.log('------------------- ');

// console.log(typeof(denominador));


// SIMPLIFICAR EM FRAÇÃO ==================================================

for(var i = Math.max(numerador, denominador); i > 1; i--) {
    if ((numerador % i == 0) && (denominador % i == 0)) {
        numerador /= i;
        denominador /= i;
    }
}

console.log('========== SIMPLIFICADO ==========');
console.log('NUMERADOR:   '+ numerador);
console.log('DENOMINADOR: '+ denominador);










// for(var i = Math.max(numerador, denominador); i > 1; i--) {
//     if ((numerador % i == 0) && (denominador % i == 0)) {
//         numerador /= i;
//         denominador /= i;
//     }
// }

// console.log('NUMERADOR:   '+ numerador);
// console.log('DENOMINADOR: '+ denominador);



/** Passos - Decimal em Fração
 *  Separar Antes e depois do ponto(virgula) - Split
 * Contar casas após a virgula
 * 
 */








// console.log(partes);
// console.log('Parte 1: ' + partes[0]);
// console.log('Parte 2: ' + partes[1]);
// console.log(typeof(denominador));



// let decimal2 = '2.1'
// let dec = parseFloat(decimal2.replace('.', ''));

// console.log(dec);
// console.log(typeof(dec));