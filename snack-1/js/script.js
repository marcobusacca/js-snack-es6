"use strict";

// ARRAY CONTENENTE I NOMI DEGLI INVITATI
const guestArray = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

// STAMPO I NOMI DEGLI INVITATI
console.log(guestArray);


// ARRAY CONTENENTE LA LISTA DEGLI OSPITI SOTTO FORMA DI OGGETTI
const newGuestArray = guestArray.map((elem, index) =>{
    
    // GENERO L'OGGETTO CONTENENTE TUTTI GLI ATTRIBUTI DI OGNI OSPITE DENTRO UNA VARIABILE
    let guestObject = {
        
        'tableName' : 'Tavolo Vip',

        'guestName' : elem,

        'guestSeat' : index + 1 * 100
    }

    return guestObject;
})

// STAMPO IN CONSOLE LA LISTA DEGLI OSPITI
console.log(newGuestArray);