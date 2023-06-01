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

- Dichiarare l'array degli invitati (const guestArray);

- Dichiarare il nuovo array (const newGuestArray) e usare la funzione guestArray.map(elem, index) con l'Arrow Function () => {}, per riempire il nuovo array:

    - Creare un nuovo Oggetto per ogni iterazione ed inserirlo in una Variabile (guestObject):

        - {

           'tableName' : 'Tavolo Vip',

           'guestName' : elem,

           'guestSeat' : index + 1 * 100
        }

    - Ritorna (return) la Variabile guestObject;


- Stampare in Console il newGuestArray.
    