let taille;
let poids;
let calcule;

function calculIMC(){

    taille = prompt("Quel est votre taille ?");
    taille = Number(taille);

    poids = prompt("Quel est votre poids ?");
    poids = Number(poids);

    calcule = poids / ( taille * taille );

    if ( calcule < 16.5){

        alert("Dénutrition ou famine.");

    } if ( calcule >= 16.5 && calcule < 18.5 ){

        alert("Maigreur.");

    } if ( calcule >= 18.5 && calcule < 25 ){

        alert("Corpulence normale.");

    } if ( calcule >= 25 && calcule < 30 ){

        alert("Surpoids.");

    } if ( calcule >= 30 && calcule < 35 ){

        alert("Obésité modérée.");

    } if ( calcule >= 35 && calcule < 40 ){

        alert("Obésité sévère.");

    } if ( calcule >= 40 ) {

        alert("Obésité morbide.");

    }
}