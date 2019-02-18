let i;
let tab = [];
let calcule;


function somme(){
    for (i=0; i<3; i++){
        tab[i] = prompt("donner un nombre");
    }
    calcule = Number(tab[0]) + Number(tab[1]) + Number(tab[2]);
    alert("la somme des nombre "+Number(tab[0])+" + "+Number(tab[1])+ " + "+Number(tab[2])+ " = " +calcule);
}