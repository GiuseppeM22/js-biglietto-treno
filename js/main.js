let chilometri = prompt ("Quanti chilometri vuoi percorrere?")
let eta = prompt ("Quanti anni hai?")
let prezzoPerKm = 0.21;
let prezzoTotale = chilometri * prezzoPerKm 

if (eta < 18){
    prezzoTotale = prezzoTotale - ( prezzoTotale * 0.2 )
 } else if (eta >= 65){
    prezzoTotale = prezzoTotale - ( prezzoTotale * 0.4 )
 }

prezzoTotale = prezzoTotale.toFixed(2)
    
alert (`il prezzo del tuo biglietto è ${prezzoTotale} $`)

 

