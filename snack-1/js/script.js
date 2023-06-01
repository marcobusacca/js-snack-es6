"use strict";

// FUNZIONE CHE GENERA UN NUMERO RANDOM (TRA 100 E 999)
function generateRandomNumber(min, max){

    return Math.floor(Math.random() * (max - min + 1) + min);
}


// FUNZIONE CHE CONTROLLA CHE NON CI SIANO NUMERI RANDOM RINDONDANTI
function checkRandomNumber(arrayNumberSeat){

    // VARIABILE DI CONTROLLO
    let checkNumber = false;

    // VARIABILE CONTENENTE IL NUMERO CASUALE
    let randomNumber;

    while(checkNumber === false){

        // RICHIAMO LA FUNZIONE CHE GENERA UN NUMERO RANDOM
        randomNumber = generateRandomNumber(100, 999);

        if(!arrayNumberSeat.includes(randomNumber)){ // CONTROLLO CHE IL NUMERO RANDOM GENERATO NON SIA RINDONDANTE

            checkNumber = true;
        }
    }

    return randomNumber;
}


// FUNZIONE CHE RIEMPE L'ARRAY_NUMBER_SEAT CON I NUMERI RANDOM GENERATI E VALIDATI
function fillArrayNumberSeat(arrayNumberSeat){

    // RICHIAMO LA FUNZIONE CHE GENERA E CONTROLLA I NUMERI RANDOM
    let randomNumber = checkRandomNumber(arrayNumberSeat);

    // INSERISCO DENTRO L'ARRAY_NUMBER_SEAT CON I NUMERI RANDOM GENERATI E VALIDATI
    arrayNumberSeat.push(randomNumber);
}


// ARRAY CONTENENTE I NUMERI DEL POSTO DI OGNI INVITATO
const arrayNumberSeat = [];