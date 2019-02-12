document.getElementById("surfaceRectangle").onclick = function() {calcule()};

function calcule(){
    a = prompt('Longeur ?');
    b = prompt ('Largeur ?');
    resultat = a*b;
    window.alert('L air du rectangle est de '+resultat );
}


document.getElementById("periRectangle").onclick = function() {calcule()};

function calcule(){
    a = prompt('Longeur ?');
    a = parseFloat(a);
    b = prompt ('Largeur ?');
    b = parseFloat(b);
    resultat = (a + b)*2;
    window.alert('Le perimetre du rectangle est de '+resultat );
}