/*Generare un numero casuale tra 1 e 6.
Attraverso un prompt chiedere all'utente un numero tra 1 e 6.
Stampare un messaggio per dire all'utente se ha vinto oppure no (il numero più alto vince).

Obiettivo: genero numero casuale
Punto 1:
*/

var num = prompt("Entry a number");
var num2 =(Math.floor(Math.random() * 5)+1);
alert(num2); //come cambiare la scritta della alerta

if (num > num2){
    console.log("you won");

} else {
    console.log("you lose");
}
