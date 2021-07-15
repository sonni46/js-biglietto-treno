// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

// il prezzo del biglietto è definito in base ai km (0.21 € al km)

// va applicato uno sconto del 20% per i minorenni

// va applicato uno sconto del 40% per gli over 65.

// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

var km = parseInt(prompt("Quanti km vuoi fare?"));
console.log(km);

var eta = parseInt(prompt("Quanti anni hai?"));
console.log(eta);

var prezzo = 0.21;

var prezzoBiglietto = km * prezzo;


var scontoMinori = 0.8;

var scontiMaggiori = 0.6;

if (eta < 18 ) 
{
   prezzoBiglietto = prezzoBiglietto * scontoMinori;
   console.log(prezzoBiglietto.toFixed(2));

} 
else if (eta > 65) 
{
    prezzoBiglietto = prezzoBiglietto * scontiMaggiori;
    console.log(prezzoBiglietto.toFixed(2));
}
else 
{
    prezzoBiglietto
    console.log(prezzoBiglietto.toFixed(2));
}
