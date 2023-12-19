//Check
console.log('JS OK');


//Chiedere all'utente il numero di chilometri che vuole percorre
const numberKilo = parseInt(prompt('Quanti chilometri vuoi percorre?', '20'));
//Chiedere all'utente età
const userAge = parseInt(prompt('Quanti anni hai?', '17'));
//Risposta in console
console.log(numberKilo, userAge);

//Creo messaggio visivo
const element = document.getElementById('price');
const messPrice = ' Il prezzo del biglietto è ';


//Calcolo km utente
let calculationKilo = numberKilo * 0.21;
console.log ('Calcolo: ' + calculationKilo);

let calculationScount;

if (userAge < 18) {
    calculationScount = calculationKilo - (20 / 100);
    price.innerText = messPrice + ' ' + calculationScount.toFixed(2)
} else if (userAge > 65) {
    calculationScount = calculationKilo - (40 / 100);
    price.innerText = messPrice + ' ' + calculationScount.toFixed(2)
} else {
    price.innerText = messPrice + ' ' + calculationKilo.toFixed(2)
}




