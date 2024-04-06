//Check
console.log('JS OK');


/* CREO UNA VARIBILE E GLI ASSEGNO LA RISPOSTA DELL'UTENTE */
const numberKilo = parseInt(prompt('Quanti chilometri vuoi percorre?', 20));


/* CREO UNA VARIBILE E GLI ASSEGNO IL VALORE DELL'UTENTE */
const userAge = parseInt(prompt('Quanti anni hai?', 17));


/* VERIFICO IL SALVATAGGIO DELLE RISPOSTE */
console.log(numberKilo, userAge);


/* RECUPERO ID HTML */
const priceElement = document.getElementById('price');


/* CREO UNA VARIBILE CON IL MESSAGGIO */
let message = 'Il prezzo del biglietto è ';


/* CREO UNA VARIBILE IN BASE AI KM (0.21€ A KM) */
const priceKm= 0.21;


/* CREO UNA VARIABILE E GLI ASSEGNO IL NUMERO DI KM CHE MI HA DATO UTENTE * 0.21 */
const priceWithoutDisc = numberKilo * priceKm;
/* CONTROLLO LA RISPOSTA */
console.log(priceWithoutDisc);


/* CREO DUE VARIBILE CON I VARI SCONTI */
let scount20 = 0.20;
let scount40= 0.40;


/* CREO UNA VARIBILE ESTERNA PER MANIPOLARLA DENTRO LA CONDIZIONE E GLI ASSEGNO IL PREZZO SENZA SCONTO */
let finalPrice = priceWithoutDisc;


/* SE ETA' DELL'UTENTE E' MINORE DI 18  */
if (userAge < 18) {
    /* PREZZO E SCONTO */
    finalPrice = priceWithoutDisc * (1 - scount20);

    /* ALTRIMENTI SE ETA' E' MAGGIORE DI 65 */
} else if (userAge > 65) {

    /* PREZZO SCONTO */
    finalPrice = priceWithoutDisc * (1 - scount40);
}


/* STAMPO IN PAGINA IL MEAGGIO + IL PREZZO IN BASE ALL'ETA' */
priceElement.innerText = message + finalPrice.toFixed(2) + '€';





