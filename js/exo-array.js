//Faire un console.log à chaque fois du tableau pour vérifier si c'est bon

//  6.1 Ecrire un algorithme qui déclare et remplisse un tableau de 7 valeurs numériques en les mettant toutes à zéro.

let array1 = [];
for(let i = 0; i < 7; i++) {
    array1[i] = 0;
}

//  6.2 Ecrire un algorithme qui déclare un tableau de 9 notes, dont on fait ensuite saisir les valeurs par l’utilisateur.

let array2 = [];
let total = 0;
for(i = 0; i <9; i++) {
    array2[i] = Number(prompt("Entre une note"));
    while(isNaN(array2[i])) {
        array2[i] = Number(prompt("La donnée doit etre un nombre !"));        
    }
    total += array2[i]
}

//  6.3 Ecrivez la fin de l’algorithme 6.2 afin que le calcul de la moyenne des notes soit effectué et affiché à l’écran. 

let avg = 0;
avg = total / array2.length
alert(`La note moyenne est : ${avg}`)