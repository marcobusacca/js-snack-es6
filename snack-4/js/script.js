"use strict";

// FUNZIONE CHE GENERA DEI NUMERI RANDOM
function generateRandomNumber(min, max){

    // GENERO E RITORNO IL NUMERO RANDOM
    return Math.floor(Math.random() * (max - min + 1) + min);
}