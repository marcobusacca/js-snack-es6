"use strict";

// FUNZIONE CHE GENERA DEI NUMERI RANDOM
function generateRandomNumber(min, max){

    // GENERO E RITORNO IL NUMERO RANDOM
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// DICHIARO L'ARRAY CONTENENTE LE SQUADRE DI CALCIO CON LE VARIE PROPRIETA'
const squadreArray = [

    {

        'nome'          : 'Inter',

        'puntiFatti'    : generateRandomNumber(1, 100),

        'falliSubiti'   : generateRandomNumber(1, 100)
    },

    {

        'nome'          : 'Milan',

        'puntiFatti'    : generateRandomNumber(1, 100),

        'falliSubiti'   : generateRandomNumber(1, 100)
    },

    {

        'nome'          : 'Juventus',

        'puntiFatti'    : generateRandomNumber(1, 100),

        'falliSubiti'   : generateRandomNumber(1, 100)
    },

    {

        'nome'          : 'Torino',

        'puntiFatti'    : generateRandomNumber(1, 100),

        'falliSubiti'   : generateRandomNumber(1, 100)
    },

    {

        'nome'          : 'Napoli',

        'puntiFatti'    : generateRandomNumber(1, 100),

        'falliSubiti'   : generateRandomNumber(1, 100)
    }
];

// STAMPO IN CONSOLE L'ARRAY
console.log(squadreArray);

// CICLO MAP CHE ESTRAPOLA LE PROPRIETA' "NOME" E "FALLI_SUBITI" E LE INSERISCE IN UN NUOVO ARRAY DI OGGETTI
const newSquadreArray = squadreArray.map(({nome, falliSubiti}) => {

    // INSERISCO DENTRO IL NUOVO ARRAY LE DUE PROPRIETA'
    return {nome, falliSubiti};
})

// STAMPO IN CONSOLE IL NUOVO ARRAY
console.log(newSquadreArray);