// Mail
// Chiedi all'utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull'esito del controllo.

// Raccolgo i dati
const listMail = [
  "elena@mail.com",
  "mattia@mail.com",
  "marco@mail.com",
  "sara@mail.com",
  "francesco@mail.com",
];

// Chiedo all'utente di inserire la sua mail
isValidMail = "";
const userMail = prompt("Inserire Mail");

// Verifico che la mail dell'utente sia nella lista delle mail
let checkedMail = false;

for (let i = 0; checkedMail == false && i < userMail.length; i++) {
  if (userMail === listMail[i]) {
    isValidMail = "La sua mail è valida";
    checkedMail = true;
  } else {
    isValidMail = "La sua mail non è valida";
  }
}

// Dico all'utente se la sua mail è valida oppure no
console.log(alert(isValidMail));

// ********************METODO ALTERNATIVO********************
/*
const userMail = prompt("Inserire Mail");

let isValidMail = listMail.indexOf(userMail);

let validation =
  isValidMail >= 0 ? "La sua mail è valida" : "La sua mail non è valida";

console.log(validation);
*/
