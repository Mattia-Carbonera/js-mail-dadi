// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Genero un numero randomico per il computer e per l'utente
const numComputer = Math.floor(Math.random() * 6) + 1;
console.log(`Al computer è uscito ${numComputer}!`);
const numUser = Math.floor(Math.random() * 6) + 1;
console.log(`Ed il tuo dado ha fatto ${numUser}!`);
let result = "";

// Verifico se i numeri siano uguali
if (numComputer === numUser) {
  result = "Parità!";
} else if (numComputer > numUser) {
  // Confronto i due numeri e vedo qual'è il piu alto
  result = "Questa volta ha vinto il computer...";
} else {
  result = "Complimenti hai vinto!!";
}
// Stabilisco il vincitore in base al risultato

console.log(result);
