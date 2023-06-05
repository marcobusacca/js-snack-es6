"use strict";

const racingBikeArray = [

    {
        'name'   : 'Alan',

        'weight' : 8                // PESO ESPRESSO IN KG
    },

    {
        'name'   : 'Atala',

        'weight' : 9                // PESO ESPRESSO IN KG
    },

    {
        'name'   : 'Basso',

        'weight' : 6                // PESO ESPRESSO IN KG
    },

    {
        'name'   : 'Bixxis',

        'weight' : 7                // PESO ESPRESSO IN KG
    },

    {
        'name'   : 'BH',

        'weight' : 5                // PESO ESPRESSO IN KG
    }
];

// VARIABILE CHE CONTERRA' L'OGGETTO CON IL PESO MINORE
let pesoMinore = racingBikeArray[0];

// CICLO FOR EACH CHE ESTRAPOLA LE PROPRIETA' DELL'OGGETTO CON IL PESO MINORE
racingBikeArray.forEach(({name, weight}) => {

    if (weight < pesoMinore.weight){ // IL PESO DELL'OGGETTO ATTUALE E' MINORE ALL'OGGETTO CHE PRIMA AVEVA IL PESO MINORE

        // ASSEGNO A PESO_MINORE LE PROPRIETA' DELL'OGGETTO CON IL PESO MINORE
        pesoMinore = {name, weight}
    }
});

// STAMPO IN CONSOLE LE PROPRIETA' DELL'OGGETTO CON IL PESO MINORE
console.log(`La Bici da Corsa con il Peso Minore è : ${pesoMinore.name}, con un Peso di : ${pesoMinore.weight} KG!`);