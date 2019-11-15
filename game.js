/*Generare un numero casuale tra 1 e 6.
Attraverso un prompt chiedere all'utente un numero tra 1 e 6.
Stampare un messaggio per dire all'utente se ha vinto oppure no (il numero più alto vince).

Obiettivo: generare numero casuale
Punto 1: utente inserisce un numero
Punto 2: il PC genera un numero random
Punto 3: messaggio in screen "Hai vinto" Hai perso"
*/

var num = prompt("Entry a number");
var num2 =(Math.floor(Math.random() * 6)+1);

if (num > num2){
    console.log("hai vinto");
    document.getElementById('won').setAttribute("class", "visible;");
    if(isNaN(num)) {
    // la variabile num non contiene un numero
    console.log("non è un numero");
    document.getElementById('wrong').setAttribute("class", "visible;");
}

} else {
    console.log("hai perso");
    document.getElementById('lose').setAttribute("class", "visible");

}
