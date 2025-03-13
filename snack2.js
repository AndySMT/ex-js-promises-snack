//* 🏆 Snack 2
/* Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi, genera un numero casuale tra 1 e 6. Tuttavia, nel 20% dei casi, il dado si "incastra" e la Promise va in reject.
🎯 Bonus: HOF con closure per memorizzare l'ultimo lancio
Modifica la funzione in creaLanciaDado(), che restituisce una closure che memorizza l'ultimo risultato. Se il numero esce due volte di fila, stampa "Incredibile!". */

/* function lanciaDado() {
  return new Promise((resolve, reject) => {
    console.log("Sto lanciando il dado");
    setTimeout(() => {
      const numero = Math.floor(Math.random() * 6) + 1;
      const caso = Math.random();
      if (caso < 0.2) {
        reject("Il dado si è incastrato!");
      } else {
        resolve(numero);
      }
    }, 2000);
  });
}

lanciaDado()
  .then((numero) => console.log("Numero ottenuto:", numero))
  .catch((error) => console.error("Errore:", error)); */

///////////////////////////////////////////////////////////////

/* function creaLanciaDado() {
  let ultimoNum = null;
  return function () {
    return new Promise((resolve, reject) => {
      const numero = Math.floor(Math.random() * 2) + 1;
      console.log("Sto lanciando il secondo dado");
      setTimeout(() => {
        if (numero === ultimoNum) {
          console.log("Incredibile");
        } else {
          ultimoNum = numero;
          resolve(numero);
        }
      }, 3000);
    });
  };
}

const lanciDado2 = creaLanciaDado();

lanciDado2().then((numero) => console.log("Secondo dado", numero));
lanciDado2().then((numero) => console.log("terzo dado", numero));
lanciDado2().then((numero) => console.log("quarto dado", numero));
lanciDado2().then((numero) => console.log("quinto dado", numero));
lanciDado2().then((numero) => console.log("sesto dado", numero)); */
// io boh meta l ha fatto papa gpt

////////////////////////////////////////////////////////////////////////

/* Esercizio: Countdown Asincrono

Obiettivo: Crea una funzione countdown(n) che restituisce una Promise.
Dettagli:
La funzione deve contare da n fino a 0, ad intervalli di 1 secondo, stampando il valore ad ogni intervallo.
Quando arriva a 0, la Promise si risolve con un messaggio di "Countdown completato!".
Se il valore iniziale n non è un numero positivo, la Promise va in reject con un messaggio d’errore. */

function countdown(num) {
  return new Promise((resolve, reject) => {
    if (typeof num !== "number" || num < 0) {
      reject("Inserisci un numero");
      return;
    }
    let count = setInterval(() => {
      console.log(num);
      num--;
      if (num < 0) {
        clearInterval(count);
        resolve("Sei felice ora? :))))");
      }
    }, 1000);
    resolve;
  });
}

countdown(5)
  .then((res) => console.log(res))
  .catch((error) => console.error(error));
