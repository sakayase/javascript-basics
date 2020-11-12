// 2.1 Ecrire un programme qui demande son prénom à l'utilisateur, et qui lui répond par un charmant « Bonjour » suivi du prénom dans une fenêtre modale. On aura ainsi le dialogue suivant :
// machine : Quel est votre prénom ?
// utilisateur : Marie-Cunégonde
// machine : Bonjour, Marie Cunégonde !.

let name = prompt("Quel est votre prénom ?");
let hello = "Bonjour, ";
let helloName = hello + name
alert(helloName);

// 2.2 Ecrire un programme qui demande un nombre à l’utilisateur, puis qui calcule et affiche le cube de ce nombre.

let nb = prompt("Donnez un nombre");
let nbSqr = nb**3;
alert(`Le cube de ${nb} est ${nbSqr}`); //concatenation litteral : obligé d'avoir `` au lieu de ""

// 3.1 Ecrire un algorithme qui demande un nombre à l’utilisateur, et l’informe ensuite si ce nombre est positif ou négatif 
// (on laisse de côté le cas où le nombre vaut zéro)

// prompt récupère en résultat TOUJOURS une string
nb = number(prompt("Donnez un nombre"));

// Si on veut un nombre, on fait un Number(prompt(...))

// Attention!
// Si vous rentrez des lettres, celles-ci au moment du Number()
// vont attribuer à la variable la valeur NaN
// NaN signifie Not A Number

if (nb > 0) {
    alert(`Le nombre est positif`)
}
else {
    alert(`Le nombre est négatif`)
}