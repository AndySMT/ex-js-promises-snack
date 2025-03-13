//* 🏆 Snack 1

/* Ottieni il titolo di un post con una Promise.

Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise che recupera il titolo di un post dal link https://dummyjson.com/posts/{id} */

/* function getPostTitle(id) {
  const title = new Promise((resolve, reject) => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });
  return title;
}

getPostTitle(1)
  .then((data) => console.log(data.title))
  .catch((error) => console.log(error))
  .finally(
    console.log(
      "Se funziono sono il titolo del post 1, altimenti hai un errore nella chiamata"
    )
  ); */

//* 🎯 Bonus: Ottieni l'intero post con l'autore
/* Crea una funzione getPost(id) che recupera l'intero post. Concatena una seconda chiamata che aggiunge una proprietà user che contiene i dati dell'autore, recuperati dalla chiamata https://dummyjson.com/users/{post.userId}. */

function getPost(id) {
  const post = new Promise((resolve, reject) => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((response) => response.json())
      .then((postData) => {
        fetch(`https://dummyjson.com/users/${postData.userId}`)
          .then((response) => response.json())
          .then((userData) => {
            postData.user = userData;
            resolve(postData);
          })
          .catch(reject);
      })
      .catch(reject);
  });
  return post;
}

getPost(3)
  .then((data) => {
    console.log(data);
    console.log(data.title);
    console.log(data.user);
    console.log(data.user.firstName, data.user.lastName);
  })
  .catch((error) => console.error(error));
