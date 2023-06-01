SNACK 1:

Il Grande Gatsby ci ha chiesto di creare i Segnaposto per il Tavolo degli Invitati alla sua Mega Festa VIP.

Ci ha lasciato il nome del Tavolo ("Tavolo Vip") e la Lista degli Invitati in Ordine di Posto:

[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

Ma la Tipografia per Stampare il tutto vuole che le mandiamo una Lista di Ospiti in cui ogni Ospite sia un Oggetto JavaScript che ha come Attributi:

- nome del tavolo,
- nome dell'ospite,
- posto occupato.

Generiamo e Stampiamo in Console la Lista per i Segnaposto.


SOLUZIONE:

- Creare una Funzione (generateRandomNumber(min, max)) che genera un Numero Random tra 100 e 999;

    - Ritorna (return): Math.floor(Math.random() * (max - min + 1) + min);


- Creare una Funzione (checkRandomNumber(arrayNumberSeat)) che controlla che non ci siano Numeri Random Rindondanti;

    - Dichiarare una Variabile di Controllo (let checkNumber = false);

    - Dichiarare una Variabile che Contiene il Numero Casuale (let randomNumber);

    - Creare un CICLO WHILE che viene eseguito SOLTANTO SE checkNumber === false:

        - Richiamare la Funzione generateRandomNumber(100, 999) ed inserirla dentro la Variabile randomNumber;

        - ? SE arrayNumberSeat NON include il randomNumber, ALLORA:

            - checkNumber = true;

    - Ritorna (return) la Variabile randomNumber;


- Creare una Funzione (fillArrayNumberSeat(arrayNumberSeat)) che riempe l'arrayNumberSeat con i Numeri Random Generati e Validati;

    - Richiamare la Funzione checkRandomNumber(arrayNumberSeat) ed inserirla dentro una Variabile che Contiene il Numero Casuale (let randomNumber);

    - Pushare dentro l'arrayNumberSeat il Numero Random Generato e Validato (arrayNumberSeat.push(randomNumber));


- Dichiarare l'array che contiene i Numeri di Posto degli Invitati (const arrayNumberSeat = []);

- Dichiarare l'array degli invitati (const guestArray);


- Dichiarare il nuovo array (const newGuestArray) e usare la funzione guestArray.map(elem) con l'Arrow Function () => {}, per riempire il nuovo array:

    - Richiamare la Funzione fillArrayNumberSeat();

    - Creare un nuovo Oggetto per ogni iterazione ed inserirlo in una Variabile (guestObject):

        - {

           'tableName' = 'Tavolo Vip',

           'guestName' = elem,

           'guestSeat' = arrayNumberSeat[elem]
        }

    - Ritorna (return) la Variabile guestObject;


- Stampare in Console il newGuestArray.
    