//* 🏆 Snack 2
/* Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi, genera un numero casuale tra 1 e 6. Tuttavia, nel 20% dei casi, il dado si "incastra" e la Promise va in reject.
🎯 Bonus: HOF con closure per memorizzare l'ultimo lancio
Modifica la funzione in creaLanciaDado(), che restituisce una closure che memorizza l'ultimo risultato. Se il numero esce due volte di fila, stampa "Incredibile!". */

function lanciaDado() {
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
  .catch((error) => console.error("Errore:", error));
