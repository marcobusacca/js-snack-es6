"use strict";

// DICHIARO L'ARRAY CON L'ELENCO DEGLI STUDENTI E LE LORO PROPRIETA'
let studentsListArray = [

    {

        'id' : '213',

        'name' : 'Marco della Rovere',

        'grades' : '78',
    },
    
    {

        'id' : '110',

        'name' : 'Paola Cortellessa',

        'grades' : '96',
    },

    {

        'id' : '250',

        'name' : 'Andrea Mantegna',

        'grades' : '48',
    },

    {

        'id' : '145',

        'name' : 'Gaia Borromini',

        'grades' : '74',
    },

    {

        'id' : '196',

        'name' : 'Luigi Grimaldello',

        'grades' : '68',
    },

    {

        'id' : '102',

        'name' : 'Piero della Francesca',

        'grades' : '50',
    },

    {

        'id' : '120',

        'name' : 'Francesca da Polenta',

        'grades' : '84',
    }
];

// PARTE 1

    const newArray_1 = studentsListArray.map((elem) => {

        // RECUPERO LA PROPRIETA' "NAME" DI OGNI OGGETTO DI STUDENTS_LIST_ARRAY E LA TRASFORMO IN MAIUSCOLO
        let studentsName = elem.name.toUpperCase();

        // INSERISCO STUDENTS_NAME DENTRO NEW_ARRAY_1
        return studentsName;
    })

    // STAMPO IN CONSOLE LA LISTA CONTENENTE I NOMI IN MAIUSCOLO
    console.log("PARTE 1",
    newArray_1
    );