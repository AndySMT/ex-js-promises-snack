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
