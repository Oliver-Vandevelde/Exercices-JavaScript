/*let a;
let b;

document.getElementById("rayon").onclick = function() {rayon()};

function rayon(){
    a = prompt('Rayon ?');
    a = parseFloat(a);
    b = Math.PI*(a*a); 
    return b;
}

document.getElementById("resultat").onclick = function(){resultat()};

function resultat(){ 
    window.alert("l air du cercle est de "+b);
}*/

let a;
let b;

function  rayon () {

     a = prompt("qu'elle est le rayon?");
     b = Math.PI*(a*a);

     return  b;
}

function resultat (b) {

     alert('la surface du cercle est de ' +b+ ' cm2')
}