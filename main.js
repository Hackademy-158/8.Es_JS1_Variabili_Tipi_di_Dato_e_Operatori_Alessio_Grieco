//! Primo Esercizio:

// TODO Dichiaro(let) ed assegno(=) un valore alle 5 variabili e per ciascuno stampo

let num1 = 1;
console.log("1° Numero:", num1);
let num2 = 2;
console.log("2° Numero:", num2);
let num3 = 3;
console.log("3° Numero:", num3);
let num4 = 4;
console.log("4° Numero:", num4);
let num5 = 5;
console.log("5° Numero:", num5);

// TODO Calcolo la somma dei 5 numeri

let somma = num1 + num2 + num3 + num4 + num5;
console.log("Somma dei 5 numeri:", somma)

// TODO Calcolo la media di questi 5 numeri

let media = somma / 5
console.log("Media dei 5 numeri:", media)




// ! Secondo Esercizio:

// TODO Dichiaro(let) ed assegno(=) un valore data attuale e di nascita, e per ciascuno stampo

let currentyear = 2024;

let birthyear = 2000;

let età = 24;

// TODO Calcolo quanti anni mi mancano per arrivare a 100

let annia100 = 100 - età;

// TODO Stampo il risultato che mi chiede la traccia:"Hai x anni e ti mancano y anni, etc..."
console.log("Anno Corrente:", currentyear);
console.log("Anno Di Nascita:", birthyear);
console.log("Età:", età);
console.log("Età che ti manca ai 100:", annia100);

console.log("Hai 24 Anni e ti mancano 76 anni per arrivare a 100!");




// !Terzo Esercizio:

//TODO Dichiaro(let) ed assegno(=) un valore dei gatti delle file e faccio i vari calcoli, e per ciascuno stampo

let gatti = 44;
let file = 6;
let totfile = gatti / file;
let resto = gatti % file;
let gattimancanti = file - resto;

// ? Stampo in un modo

console.log("Ci Sono " + totfile + " File di gatti e ne mancano " + gattimancanti + " per una nuova fila, con un avanzo di " + resto);

//? Stampo in un secondo modo

console.log(`Ci Sono ${totfile} File di gatti e ne mancano ${gattimancanti} per una nuova fila, con un avanzo di ${resto}`);







