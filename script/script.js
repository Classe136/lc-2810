"use strict";
/* 
    Tutte le istruzioni in questo file vengono eseguite
    riga per riga dall'alto verso il basso fino al termine
    del file, appena lo script viene caricato dal browser
    A meno che .....
*/
console.clear();

// console.log("Hello World !");
// const meteo = "soleggiato";
// console.log("Meteo:", meteo);
// console.log("Meteo" + " " + meteo);
// console.log(`Meteo: ${meteo}`);

/*
Una condizione è un Valore oppure il valore che risulta da una espressione
che può essere solo TRUE o FALSE
*/

/*
Chiediamo all'utente due parole
Andiamo poi a verificare quale delle due parole è più lunga e stampiamo in console un messaggio appropriato.


Fase 1 - Preparazione
Obiettivo o output: messaggio che comunichi quale'è la parola più lunga

Fase 2 - Raccolta dati
parola1
parola2

messaggio

*/

/*Esercizio Due Parole
const parola1 = prompt("Inserisci prima parola");
console.log(parola1.length);

const parola2 = prompt("Inserisci seconda parola");
console.log(parola2.length);

let messaggio = "";

if (parola1.length > parola2.length) {
  messaggio = "La parola più lunga è " + parola1;
} else if (parola2.length > parola1.length) {
  messaggio = "La parola più lunga è " + parola2;
}  {
  messaggioelse = "La parole sono uguali"
}

console.log(messaggio);



*/
/*

pari o dispari: chiedere all'utente se vuole pari o dispari e un numero intero compreso tra 1 e 9. Generare un numero casuale compreso tra 1 e 9, che sarà la giocata del computer. Stabilire e comunicare chi ha vinto secondo le regole di pari o dispari.

Fase 1 - Preparazione
messaggio che comunica chia ha vinto

Fase 2 - Raccolta dati

oddEven = scelta pari o dispari dell'utente
userNumber chiesto all'utente
pcNumber casuale generato per il computer



const oddEven = prompt("Inserisci pari o dispari");
console.log(oddEven);

const userNumber = parseInt(prompt("Inserisci un numero tra 1 e 9"));
console.log(userNumber);

const pcNumber = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
console.log(pcNumber);

const somma = userNumber + pcNumber;
console.log(somma);

let risultato;
let messaggio;

if (somma % 2 === 0) {
  risultato = "pari";
} else {
  risultato = "dispari";
}

console.log(risultato);
if (oddEven === risultato) {
  messaggio = "Wowwww hai vinto !!!!";
} else {
  messaggio = "Mi dispiace ritenta ! Sarai più fortunato !!!";
}

console.log(messaggio);



*/

// let oggi = new Date("2024/10/29");
// console.log(oggi.getFullYear());
/*

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km) 
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

Fase 1 - Preparazione
Obiettivo: output prezzo del viaggio (max 2 decimali)

Fase 2 - Raccolta dati
finalPrice - output finale
priceKm
discountJunior
discountSenior
age
km 
.... eccetera eccetera


*/
