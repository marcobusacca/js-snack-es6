"use strict";

// FUNZIONE CHE GENERA UN NUMERO RANDOM (TRA 100 E 999)
function generateRandomNumber(min, max){

    return Math.floor(Math.random() * (max - min + 1) + min);
}