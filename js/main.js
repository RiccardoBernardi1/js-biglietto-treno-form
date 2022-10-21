"use strict"
// 1. Chiedere all'utente nome e cognome
const name=document.getElementById("name").value;
console.log(name);
// 2. Chiedere all'utente i km da percorerre
const km=Number(document.getElementById("km").value);
console.log(km);
// 3. Far scegliere all'utente la fascia d'età del passeggero
const age=document.getElementById("age").value;
console.log(age);
// 4. Calcolare il prezzo del biglietto
let price= km * 0.21
if (age==="under-age"){
    price-=price*0.2;
    console.log(price+(" minorenne"))
    .document.getElementById("")
}else if (age==="over-65"){
    price-=price*0.4;
    console.log(price+(" over 65"))
}else{
    console.log(price+" adulto")
}

// 5. Mostrare a schermo il biglietto
