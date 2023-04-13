let chilometri = prompt ("Quanti chilometri vuoi percorrere?")
let eta = prompt ("Quanti anni hai?")
let prezzoPerKm = 0.21;
let prezzoTotale = chilometri * prezzoPerKm 

if (eta < 18){
    prezzoTotale = prezzoPerKm / 20 * 100
 } else if (eta >= 65){
    prezzoTotale = prezzoPerKm / 40 * 100
 }

prezzoTotale = prezzoTotale.toFixed(2)
    
alert (`il prezzo del tuo biglietto è ${prezzoTotale} $`)

 

