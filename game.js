/*Generare un numero casuale tra 1 e 6.
Attraverso un prompt chiedere all'utente un numero tra 1 e 6.
Stampare un messaggio per dire all'utente se ha vinto oppure no (il numero più alto vince).*/

/*var num = Math.random();
var num2 = num * 6;
var dadi = Math.ceil (num2);
alert(dadi);*/
var num = prompt('Entry a number');
var num2 = num * 6;
if num > num2 {
    console.log (you won)
    
} else {
    console.log(you lose)
}
