/*4.1 Ecrire un algorithme qui demande une heure, et affiche sa valeur une minute plus tard
Entrez une heure: 23
Entrez une minute: 12
Dans une minute, il sera 23:13 */


let hour = Number(prompt("Entrez une heure:"));
let minute = Number(prompt("Entrez une minute:"));

if (hour >= 24 || minute >= 60) {
    alert("Veuillez entrer une heure au format hh:mm")
}
else if (hour < 0 || minute < 0) {
    alert("Veuillez entrer un chiffre positif")
}
else if (minute === 59 && hour != 23) {
    hour += 1;
    minute = "00";
    alert(`Dans une minute il sera ${hour}:${minute}`);
}
else if (hour === 23 && minute === 59) {
    hour = "00";
    minute = "00";
    alert(`Dans une minute il sera ${hour}:${minute}`);
}
else {
    alert(`Dans une minute il sera ${hour}:${minute + 1}`)
}



/* 4.2 Ecrire un algorithme qui demande une heure, et affiche sa valeur une seconde plus tard
Entrez une heure: 23
Entrez une minute: 59
Entrez une seconde: 59
Dans une seconde, il sera 0 heure(s) 0 minute(s) 0 seconde(s) */

hour = Number(prompt("Entrez une heure:"));
minute = Number(prompt("Entrez une minute:"));
let second = Number(prompt("Entrez une seconde:"));

if (hour >= 24 || minute >= 60 || second >= 60) {
    alert("Veillez entrer une heure au format hh:mm")
}
else if (hour < 0 || minute < 0 || minute < 0) {
    alert("Veuillez entrer un chiffre positif")
}
else if (second === 59 && minute != 59 && hour != 59) {
    minute += 1;
    second = "00";
    alert(`Dans une seconde il sera ${hour}:${minute}:${second}`);
}
else if (hour < 23 && minute === 59 && second === 59) {
    hour += 1;
    minute = "00";
    second = "00";
    alert(`Dans une seconde il sera ${hour}:${minute}:${second}`);
}
else if (hour === 23 && minute === 59 && second === 59) {
    hour = "00";
    minute = "00";
    second = "00";
    alert(`Dans une seconde il sera ${hour}:${minute}:${second}`);
}
else {
    alert(`Dans une seconde il sera ${hour}:${minute}:${second + 1}`);
}

/* 4.3 Un magasin de reprographie facture 0,10 E les dix premières photocopies, 0,09 E les vingt suivantes et 0,08 E au-delà. E
crivez un algorithme qui demande à l’utilisateur le nombre de photocopies effectuées et qui affiche la facture correspondante. */

let nbPhoto = Number(prompt("Combien de photographies demandez vous : "));
let price;

if (isNaN(nbPhoto)){
    alert('Not a Number')
}
else if (nbPhoto <= 10) {
    price = nbPhoto * 0.10;
    alert(`Le prix sera de ${price} euro`)
}
else if (nbPhoto > 10 && nbPhoto <= 30) {
    price = (10 * 0.10) + ((nbPhoto - 10) * 0.09);
    alert(`Le prix sera de ${price} euro`)
}
else if (nbPhoto > 30) {
    price = (10 * 0.10) + (20 * 0.09) + ((nbPhoto - 30) * 0.08);
    alert(`Le prix sera de ${price} euro`) 
}