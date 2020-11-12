// 3.2 Ecrire un algorithme qui demande un nombre à l'utilisateur, et l'informe ensuite si ce nombre est divisible par 2

nb = number(prompt("Donnez un nombre"));
if (nb % 2 === 0) {
    alert("Le nombre est divisible par 2")
}
else {
    alert("Le nombre n'est pas divisible par 2")
}

// 3.3 Ecrire un algorithme qui demande un nombre à l’utilisateur, 
// et l’informe ensuite si ce nombre est positif ou négatif (on inclut cette fois le traitement du cas où le nombre vaut zéro).

nb = number(prompt("Donnez un nombre"));
if (nb > 0) {
    alert(`Le nombre est positif`)
}
else if (nb == 0) {
    alert("Le nombre est egal à 0")
}
else {
    alert(`Le nombre est négatif`)
}


