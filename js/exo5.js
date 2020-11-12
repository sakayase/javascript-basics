//5.1 Ecrire un algorithme qui affiche les nombres de 18 à 27

for(let i=18; i<28; i++) {
    console.log(i)
}

//5.2 Ecrire un algorithme qui affiche les nombres de 5 en 5 de 123 jusqu'à 356

for(i=123; i<357; i+=5) {
    console.log(i)
}

//5.3 Top départ de 60 jusqu'à 0 et afficher "bonne année !"

for(i=60; i>-1; i--) {
    if(i === 0) {
        console.log("Bonne année !")
    }
}

/*
5.4 Ecrire un algorithme qui demande à l’utilisateur un nombre compris entre 1 et 3 jusqu’à ce que la réponse convienne.
*/

let nb = Number(prompt('Entrez un nombre compris entre 1 et 3 :'))

while (nb < 1 || nb > 3 || isNaN(nb)){
    if (isNaN(nb)){
        nb = Number(prompt('Entre un NOMBRE !'))
    }
    if (nb < 1 || nb > 3){
        nb = Number(prompt('Entre un nombre COMPRIS ENTRE 1 ET 3 !'))
    }
}


/*
5.5 Ecrire un algorithme qui demande un nombre de départ, et qui ensuite affiche les dix nombres suivants. 
Par exemple, si l'utilisateur entre le nombre 17, le programme affichera les nombres de 18 à 27.
*/

nb = Number(prompt('Entrez un nombre :'))

while (isNaN(nb)){
    nb = Number(prompt('Entre un NOMBRE !'))
}

for(let i = nb + 1; i <= nb + 10; i++){
    console.log(i)
}



