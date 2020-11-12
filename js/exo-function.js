/*7.1 Écrivez une fonction qui renvoie la somme de cinq nombres fournis en argument.

function sum(a, b, c, d, e){
    return a + b + c + d + e;
}

let test = sum(1, 1, 1, 1, 1);

/*7.2 Ecrire une fonction qui demande un nombre de départ, et qui ensuite écrit la table de multiplication de ce nombre, présentée comme suit (cas où l'utilisateur entre le nombre 7) :
Table de 7 :
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
…
7 x 10 = 70

function mutliplTable(num) {
    console.log(`Table de ${num} :`)
    for(let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

mutliplTable(1);
mutliplTable(11);

/* 7.3. Ecrire une fonction qui demande en paramètre un nombre,  et qui calcule la somme des entiers jusqu’à ce nombre.
Par exemple, si l’on entre 5, le programme doit calculer :
1 + 2 + 3 + 4 + 5 = 15 

function intSum(num) {
    let add = 0;
    for(let i = 0; i <= num; i++) {
        add += i; 
    }
    return add;
}

test = intSum(12);
*/
/* 7.4. Ecrire une fonction qui informe si un tableau envoyé en argument est formé ou non d'éléments tous rangés en ordre croissant. */

function isSorted(array){  
    for(let i = 0; i <= array.length; i++){
        if((array[i] > array[i+1]) && array[i+1] !== undefined){
            return false;
        }
    }
    return true;
}


/*
Ecrire une fonction qui demande un nombre de départ, et qui retourne sa factorielle.
NB : la factorielle de 8 vaut
1 x 2 x 3 x 4 x 5 x 6 x 7 x 8=40320
*/

function factorielle(num) {
    let fact = 1;
    for(let i = 1; i <= num; i++) {
        fact *=  i;
    }
    return fact;
}

/* Demandez 20 nombres à l'utilisateur, et stockez les dans un tableau.
Ecrire une fonction qui prend en argument ce tableau, et qui retourne le nombre le plus grand. */

function getArray(len) {
    let array = [];
    for(let i=0; i < len; i++){
        array[i] = Number(prompt("Entrez un nombre"));
        while(isNaN(array[i])) {
            array[i] = Number(prompt("Entrez un NOMBRE"));
        }
    }
    return array;
}
function whichGreater(array) {
    let max = array[0];
    for(let i = 1; i <= array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

//arrayTest = getArray(20);
//console.log(whichGreater(arrayTest));

/* Ecrire une fonction qui retourne true si un nombre est premier, 
false si le nombre n'est pas premier. */

var t0 = performance.now()

function isPrime(num) {
    if(num == 1 || num <= 0 || num % 2 == 0) {
        return false;
    }
    for(let i = 3; i <= Math.sqrt(num); i+=2) {
        console.log(Math.sqrt(num))
        if(num % i == 0){
            return false;
        }
    }
    return true
}



numUser = prompt("donne un chiffre premier")

var t0 = performance.now()
console.log(isPrime(numUser))
var t1 = performance.now()

console.log("Call to isPrime took " + (t1 - t0) + " milliseconds.")

// 12468 ms pour 100000000003 en JS
// 12 ms pour 100000000003 en Python3