"use strict"
// 1. Chiedere all'utente nome e cognome
// 2. Chiedere all'utente i km da percorerre
// 3. Far scegliere all'utente la fascia d'età del passeggero
// 4. Calcolare il prezzo del biglietto
// 5. Generare casualmente carrozza e codice CP
// 6. Mostrare a schermo il biglietto
// 7. Nascondere il biglietto quando si clicca annulla
let name 
let km
let age
let price= km * 0.21
const btnGenerator= document.getElementById("btn-generator");
btnGenerator.addEventListener("click", function(){ 
    name = document.getElementById("name").value;
    document.getElementById("name-showed").innerHTML=name;
    console.log(name);
    km = Number(document.getElementById("km").value);
    console.log(km+"km");
    let age=document.getElementById("age").value;
    console.log(age+"età");
    price= km * 0.21 
    let wagon= Math.floor(Math.random() * 10+1);
    document.getElementById("wagon").innerHTML=wagon
    console.log(wagon);
    let cpCode= Math.floor(Math.random() * 10000+90000);
    document.getElementById("cp-code").innerHTML=cpCode
    console.log(cpCode);
    if (age=="1"){
        price-=price*0.2;
        console.log(price+(" minorenne"));
    document.getElementById("offer").innerHTML="Biglietto Minorenni";
    }else if (age=="2"){
        price-=price*0.4;
        console.log(price+(" over 65"));
        document.getElementById("offer").innerHTML="Biglietto Over 65";
    }else{
        console.log(price+" adulto");
        document.getElementById("offer").innerHTML="Biglietto Standard";
    }
    document.getElementById("price").innerHTML=parseFloat(price).toFixed(2)+"€"; 
    if (km!==0) {
        if (!(isNaN (km)))
            if (km<=18000){
                document.getElementById("ticket").classList.remove("d-none") ;
            } else{
                alert("Inserisci un numero di km valido");
            }
        else{
            alert("Inserisci un numero di km valido");
        }
    } else{
        alert("Inserisci un numero di km valido");
    }
});
const btnCancel= document.getElementById("btn-cancel");
btnCancel.addEventListener("click", function(){ 
    document.getElementById("ticket").classList.add("d-none") ;
    window.location.reload();
});