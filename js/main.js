"use strict"
// 1. Chiedere all'utente nome e cognome
const name=document.getElementById("name").value;
console.log(name);
document.getElementById("name-showed").innerHTML=name;
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
    console.log(price+(" minorenne"));
document.getElementById("offer").innerHTML="Biglietto Minorenni";
}else if (age==="over-65"){
    price-=price*0.4;
    console.log(price+(" over 65"));
    document.getElementById("offer").innerHTML="Biglietto Over 65";
}else{
    console.log(price+" adulto");
    document.getElementById("offer").innerHTML="Biglietto Standard";
}
document.getElementById("price").innerHTML=price
// 5. Generare casualmente carrozza e codice CP
let wagon= Math.floor(Math.random() * 10+1);
document.getElementById("wagon").innerHTML=wagon
console.log(wagon);
let cpCode= Math.floor(Math.random() * 10000+90000);
document.getElementById("cp-code").innerHTML=cpCode
console.log(cpCode);
// 6. Mostrare a schermo il biglietto
const btnGenerator= document.getElementById("btn-generator");
btnGenerator.addEventListener("click", function(){ 
    document.getElementById("ticket").classList.remove("d-none") ; 
});
// 7. Nascondere il biglietto quando si clicca annulla
const btnCancel= document.getElementById("btn-cancel");
btnCancel.addEventListener("click", function(){ 
    window.location.reload()
});