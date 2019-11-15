/*Generare un numero casuale tra 1 e 6.
Attraverso un prompt chiedere all'utente un numero tra 1 e 6.
Stampare un messaggio per dire all'utente se ha vinto oppure no (il numero più alto vince).*/

var num = prompt("Entry a number");
var num2 = alert(Math.floor(Math.random() * 6));

if (num > num2){
    console.log("you won");

} else {
    console.log("you lose");
}
