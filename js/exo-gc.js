/* 
Ecrire un algorithme qui demande l'âge d'un enfant à l'utilisateur. 
Ensuite, il l'informe de sa catégorie :
"Poussin" de 6 à 7 ans
"Pupille" de 8 à 9 ans
"Minime" de 10 à 11 ans
"Cadet" après 12 ans
*/

let age = Number(prompt('Quel age à le chiard :'));

while(isNaN(age || age < 0)){
    if(isNaN(age)){
        age = Number(prompt('J\'ai demandé l\'age ...'));
    }
    else {
        age = Number(prompt('L\'age ne peut etre négatif ...'));
    }
}

if (age < 6) {
    alert('Apparament il n\'existe pas');
}
else if (age >= 6 && age <= 7) {
    alert('Votre enfant est une poussin');
}
else if (age >= 8 && age <= 9) {
    alert('Votre enfant est une pupille');
}
else if (age >= 10 && age <= 11) {
    alert('Votre enfant est minime, quoi que cela veuille dire');
}
else {
    alert('Votre enfant est un cadet')
}

/*
Les habitants de Zorglub paient l'impôt selon les règles suivantes :
les hommes de plus de 20 ans paient l'impôt
les femmes paient l'impôt si elles ont entre 18 et 35 ans
les autres ne paient pas d'impôt
Le programme demandera donc l'âge et le sexe du Zorglubien, 
et se prononcera donc ensuite sur le fait que l'habitant est imposable.
*/

age = Number(prompt('Quel age avez vous ?'));
let genre = prompt('Quel est votre genre (h/f) ?');
console.log(genre)

while(isNaN(age) || age < 0 || !(genre == 'h' || genre == 'f')){
    if(isNaN(age)){
        age = Number(prompt('J\'ai demandé l\'age ...'));
    }
    else if(age < 0) {
        age = Number(prompt('L\'age ne peut etre négatif ...'));
    }
    else{
        genre = prompt('Quel est votre genre (h/f) ?');
    }
}

if(age > 20 && genre == 'h') {
    alert('Tu payes')
}
else if(age > 18 && age < 35 && genre == 'f') {
    alert('Tu payes')
}
else {
    alert('T\'es bien tu payes pas')
}

/* 
Ecrire un algorithme qui demande un nombre compris entre 10 et 20, 
jusqu'à ce que la réponse convienne. En cas de réponse supérieure à 20, 
on fera apparaître un message : « Plus petit ! », et inversement, « Plus grand ! » si le nombre est inférieur à 10.
*/

let nb = Number(prompt('Entrez un nombre compris entre 10 et 20 :'))

while (nb < 10 || nb > 20 || isNaN(nb)){
    if (isNaN(nb)){
        nb = Number(prompt('Entre un NOMBRE !'))
    }
    if (nb < 10){
        nb = Number(prompt('Plus grand !'))
    }
    if (nb > 20){
        nb = Number(prompt('Plus petit !'))
    }   
}
