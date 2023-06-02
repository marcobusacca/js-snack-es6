SNACK 2:

Abbiamo un Elenco degli Studenti di una Facoltà, Identificati da ID, NOME e SOMMA TOTALE dei loro VOTI di ESAME;

1. Per preparare l'aula di un nuovo corso, dobbiamo Stampare le Targhe col Nome degli Studenti: creare una Lista contenente il loro Nome tutto in MAIUSCOLO : ES (Marco della Rovere => MARCO DELLA ROVERE);

2. Dobbiamo creare una Lista di tutti gli Studenti che hanno un Totale di Voti Superiore a 70;

3. Dobbiamo creare una Lista di tutti gli Studenti che hanno un Totale di Voti Superiore a 70 e ID Superiore a 120;


Questo è l'Elenco degli Studenti:
```
Id          Name                        Grades
213         Marco della Rovere          78
110         Paola Cortellessa           96
250         Andrea Mantegna 	        48
145         Gaia Borromini              74
196         Luigi Grimaldello 	        68
102         Piero della Francesca       50
120         Francesca da Polenta        84



SOLUZIONE:

- Dichiarare l'Array contenente l'Elenco degli Studenti e i Loro Vari Attributi.



SOLUZIONE 1:

    1. Creare un CICLO MAP ((elem) =>{}) sull'Array Iniziale, per creare una Lista contenente i Nomi in MAIUSCOLO, ed Inserirlo in una Constante:
    
        - Creare una Variabile dove inserire i Nomi degli Studenti in MAIUSCOLO: elem.name.toUpperCase();

        - Ritornare (return) la Variabile con i Nomi degli Studenti in MAIUSCOLO.

    - Stampa in Console il Nuovo Array.



SOLUZIONE 2:

    2. Creare un CICLO FILTER (((elem) =>{})) sull'Array Iniziale, per creare una Lista di tutti gli Studenti che hanno un Totale di Voti Superiore a 70, ed Inserirlo in una Constante:

        - Inserire dentro una Variabile i Voti di Ogni Studente : let studentsGrades = elem.grades;

        - ? SE studentsGrades > 70, ALLORA:

            - return true;

    - Stampa in Console il Nuovo Array.



SOLUZIONE 3:

    3. Creare un CICLO FILTER (((elem) =>{})) sull'Array Iniziale, per creare una Lista di tutti gli Studenti che hanno un Totale di Voti Superiore a 70 e ID Superiore a 120, ed Inserirlo in una Constante:

        - Inserire dentro una Variabile i Voti di Ogni Studente : let studentsGrades = elem.grades;

        - Inserire dentro una Variabile l'ID di Ogni Studente : studentsId = elem.id;

        - ? SE studentsGrades > 70 E studentsId > 120, ALLORA:

            - return true;

    - Stampa in Console il Nuovo Array.


