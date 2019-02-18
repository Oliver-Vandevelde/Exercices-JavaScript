let i = 0;
let moyenne = Number(0);
let nmbr;
let calcule;

function calculMoyenne(){

    nmbr = prompt("Entrer un nombre entier positif ou bien un nombre negatif pour arreter et avoir la moyenne.");

    do {

        if(Number.isInteger(Number(nmbr))){

            moyenne += Number(nmbr);
            i++;

        } else {

            alert("un nombre entier ont a dis !");

        }

        nmbr = prompt("Entrer un nombre entier positif ou bien un nombre negatif pour arreter et avoir la moyenne.")
    }
    while ( nmbr >= 0);

    if ( nmbr < 0 ) {

        calcule = moyenne/i;

        alert("Nombres de valeurs entrée : " + i );
        alert("Voici la moyenne : " + calcule);

        //reset de valeur , sans sa elle s'add a l'infinie (chercher une autre solution "Break"ne marche pas).
        i = 0;
        moyenne = Number(0);
        nmbr = Number(0);
        calcule = Number(0);

    }
}