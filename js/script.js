//Check
console.log('JS OK');


//Chiedere all'utente il numero di chilometri che vuole percorre
const numberKilo = parseInt(prompt('Quanti chilometri vuoi percorre?', 20));
//Chiedere all'utente età
const userAge = parseInt(prompt('Quanti anni hai?', 17));
//Risposta in console
console.log(numberKilo, userAge);

//Recupore l'elemento
const priceElement = document.getElementById('price');

// Preparo il messaggio
let message = 'Il prezzo del biglietto è ';

//Calcolo km utente
const priceKm= 0.21;

//Prezzo senza sconto
const priceWithoutDisc = numberKilo * priceKm;
console.log(priceWithoutDisc);

//Sconti
let scount20 = 0.20;
let scount40= 0.40;

let finalPrice = priceWithoutDisc;

if (userAge < 18) {
    finalPrice = priceWithoutDisc * (1 - scount20);
} else if (userAge > 65) {
    finalPrice = priceWithoutDisc * (1 - scount40);
}

// Messaggio del prezzo
priceElement.innerText = message + finalPrice.toFixed(2) + '€';





