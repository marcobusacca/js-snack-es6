SNACK 4:

Creare un array di oggetti di squadre di calcio;

Ogni squadra avrà diverse proprietà: Nome, Punti Fatti, Falli Subiti.

Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.

Generare Numeri Random al posto degli 0 nelle Proprietà: Punti Fatti e Falli Subiti.

Infine, usando la destrutturazione, creiamo un nuovo array i cui elementi contengono solo Nomi e Falli Subiti e Stampiamo Tutto in Console.


SOLUZIONE:

- Creare una Funzione (generateRandomNumber(min, max)) che genera dei Numeri Random;


- Dichiarare l'Array di Oggetti di Squadre Di Calcio :

    {
        'nome'  : nomeSquadra,

        'puntiFatti' : Richiamare la Funzione generateRandomNumber(1, 100),

        'falliSubiti' : Richiamare la Funzione generateRandomNumber(1, 100)
    }


- Creare un CICLO MAP che scorre tutti gli Oggetti dell'Array, estrapola le Proprietà 'nome' e 'falliSubiti' e le inserisce in un nuovo Array;

- Stampare il Nuovo Array in Console.
