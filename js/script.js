//Check
console.log('JS OK');

//Chiedere all'utente il numero di chilometri che vuole percorre
const numberKilo = parseInt(prompt('Quanti chilometri vuoi percorre?', '20'));
//Chiedere all'utente età
const userAge = parseInt(prompt('Quanti anni hai?', '24'));
//Risposta in console
console.log(numberKilo, userAge);

//Calcolo km utente
const calculationKilo = numberKilo * 0.21;
console.log ('Calcolo: ' + calculationKilo);


//Apllico sconto solo se:
if (userAge < 18) {
    console.log ('Avrà uno sconto del 20%');
} else if (userAge > 65) {
    console.log ('Avrà uno sconto del 40%');
} else {
    console.log('Non avrà sconto');
}

//Massimo 2 decimali
const formattedCalc = calculationKilo.toFixed(2);

//Creo messaggio visivo
const element = document.getElementById('price');
const messPrice = ' Il prezzo del biglietto è ';

price.innerText = messPrice + formattedCalc;