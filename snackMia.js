/* 
Esercizio: Fetch e Combinazione di Dati con Promises

Descrizione:
Crea una funzione fetchUserPosts(userId) in JavaScript che faccia le seguenti operazioni:

Recupera i dati dell'utente:

Utilizza l'endpoint https://dummyjson.com/users/{userId} per ottenere i dettagli dell'utente.
La chiamata deve essere gestita con Promises (usando fetch).
Recupera i post dell'utente:

Utilizza un endpoint (ad esempio, https://dummyjson.com/posts/user/{userId}) per ottenere un array di post associati a quell'utente.
Anche questa chiamata deve essere gestita con Promises.
Combina i dati:

Una volta ottenuti i dati dell'utente e i post, la funzione deve restituire (risolvendo la Promise) un oggetto con questa struttura:
javascript
Copia
{
  user: { ... }, // dati dell'utente
  posts: [ ... ] // array dei post dell'utente
}
Gestione degli errori:

Se una delle chiamate va in errore, la Promise deve essere rigettata con un messaggio d’errore adeguato.
Utilizzo della funzione:

Infine, assicurati di mostrare un esempio di come utilizzare fetchUserPosts(userId), gestendo il risultato con .then() e .catch().
Obiettivo:
L'esercizio serve per praticare l'uso delle Promises in JavaScript, il chaining delle chiamate asincrone e la combinazione dei dati ottenuti da API differenti.
 */
function fetchUserPosts(userId) {
  return new Promise((resolve, reject) => {
    fetch(`https://dummyjson.com/users/${userId}`)
      .then((response) => response.json())
      .then((userData) => {
        fetch(`https://dummyjson.com/posts/user/${userId}`)
          .then((response) => response.json())
          .then((userPost) => {
            userData.post = userPost;
            resolve(userData);
            /* resolve({ user: userData, posts: userPost }); */
          })
          .catch(reject);
      })
      .catch(reject);
  });
}

fetchUserPosts(1)
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

//////////////////////////////////////////////////////////////////////////////////////

/* Esercizio: Simulazione di Estrazione Lotteria

Descrizione:

Funzione di estrazione:
Crea una funzione estraiBiglietto() che simula l’estrazione di un biglietto della lotteria. La funzione deve:

Restituire una Promise che si risolve dopo 2 secondi (usa setTimeout).
Generare un numero casuale intero tra 1 e 100.
Se il numero è maggiore o uguale a 90 (ad esempio), il biglietto è considerato vincente e la Promise si risolve con un oggetto come:
javascript
Copia
{ biglietto: numero, vincente: true }
Altrimenti, la Promise va in reject con un messaggio come "Biglietto non vincente".
Funzione per giocare:
Crea una funzione giocaLotteria(tentativi) che:

Riceve un numero tentativi e, utilizzando il chaining delle Promises, esegue in sequenza tentativi chiamate a estraiBiglietto().
Dopo ogni tentativo, stampa il risultato.
Se in uno dei tentativi ottieni un biglietto vincente, interrompi la sequenza e stampa "Hai vinto!".
Se dopo tutti i tentativi non esce nessun biglietto vincente, stampa "Riprova la prossima volta!".
Gestione degli errori:

Assicurati che, in caso di errore (biglietto non vincente), il flusso passi al tentativo successivo fino a esaurimento dei tentativi.
Obiettivo:
Questo esercizio serve per mettere in pratica:

La creazione e la risoluzione/rifiuto di Promises.
L’uso di setTimeout per simulare ritardi.
Il chaining delle Promises per eseguire operazioni asincrone in sequenza.
La gestione degli errori e il controllo del flusso in caso di tentativi multipli. */

function estraiBiglietto() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const estratto = Math.floor(Math.random() * 100) + 1;
      if (estratto >= 80) {
        resolve({ Biglietto: estratto, Vincente: true });
      } else {
        reject("Ritenta Bro");
      }
    }, 1000);
  });
}

async function giocaLotteria(nTentativi) {
  for (let i = 0; i < nTentativi; i++) {
    try {
      const risultato = await estraiBiglietto();
      console.log(`Tentativo ${i + 1}: Vincita!`, risultato);
      return risultato;
    } catch (error) {
      console.log(`Tentativo ${i + 1}: ${error}`);
    }
  }
  throw new Error(`Nessun biglietto vincente dopo ${nTentativi} tentativi`);
}

estraiBiglietto()
  .then((mess) => console.log(mess))
  .catch((error) => console.error(error));

giocaLotteria(5)
  .then((vincita) => console.log("Hai vinto!", vincita))
  .catch((errore) => console.error("Hai perso:", errore));
