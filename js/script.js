//Check
console.log('JS OK');


//Chiedere all'utente il numero di chilometri che vuole percorre
const numberKilo = parseInt(prompt('Quanti chilometri vuoi percorre?', '20'));
//Chiedere all'utente età
const userAge = parseInt(prompt('Quanti anni hai?', '17'));
//Risposta in console
console.log(numberKilo, userAge);


//Calcolo km utente
let calculationKilo = numberKilo * 0.21;
console.log ('Calcolo: ' + calculationKilo);


//Apllico sconto solo se:
let result;
if (userAge < 18) {
    result = 'e avrai uno sconto del 20%';
} else if (userAge > 65) {
    result = 'e avrai uno sconto del 40%';
} else {
    result = 'ma non avrai lo sconto';
}


//Massimo 2 decimali
const formattedCalc = calculationKilo.toFixed(2);


//Creo messaggio visivo
const element = document.getElementById('price');
const messPrice = ' Il prezzo del biglietto è ';

price.innerText = messPrice + ' ' + formattedCalc + '€' +  ' ' + result;