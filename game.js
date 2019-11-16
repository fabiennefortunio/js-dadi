/*Generare un numero casuale tra 1 e 6.
Attraverso un prompt chiedere all'utente un numero tra 1 e 6.
Stampare un messaggio per dire all'utente se ha vinto oppure no (il numero più alto vince).

Obiettivo: generare numero casuale
Punto 1: utente inserisce un numero
Punto 2: il PC genera un numero random
Punto 3: messaggio in screen "Hai vinto" "Hai perso"
*/

var num = prompt("Entry a number");
var num2 = alert(Math.floor(Math.random() * 6)+1);

if (num > num2){
    console.log("You won");
    document.getElementById('won').innerHTML = 'you won';
    if(isNaN(num)) {
    // la variabile num non contiene un numero
    console.log("this is not a number");
    document.getElementById('wrong').innerHTML = 'wrong number';
}

} else {
    console.log("You lose");
    document.getElementById('lose').innerHTML = 'you lose';

}
document.getElementById('won').setAttribute('class','visible');
document.getElementById('lose').setAttribute('class','visible');
document.getElementById('wrong').setAttribute('class','visible');

// non posso stampare sullo screen
