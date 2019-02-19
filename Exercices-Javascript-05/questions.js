/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
    return texte.length;
}
var remplaceECar = function (texte) {
    let a = texte.indexOf("e")
    let text =  texte.substr(" ", a) + " " +texte.substr(a + 1 , texte.length);
    return text;
}
var concatString = function (texte1, texte2) {
    let text = texte1 + texte2;
    return text;
}
var afficherCar5 = function (texte) {
    let mot = texte[4];
    return mot;
}
var afficher9Car = function (texte) {
    let mot = texte.slice(0,9);
    return mot;
}
var majusculeString = function (texte) {
    let text = texte.toUpperCase();
    return text;

}
var minusculeString = function (texte) {
    let text = texte.toLowerCase();
    return text
}
var SupprEspaceString = function (texte) {
    let espace = texte.trim();
    return espace;
}
var IsString = function (texte) {
   typeof texte;
   return true;
}

var AfficherExtensionString = function (texte) {
    let point = texte.indexOf(".");
    let ext = texte.substr(point + 1);
    return ext;
}
var NombreEspaceString = function (texte) {
    let espace = texte.indexOf(" ");
    let i = 0;

    while ( espace != -1){
        i++;
        espace = texte.indexOf(" ", espace + 1);
    }
    return i;
}
var InverseString = function (texte) {
    let text = texte.split("").reverse().join("");
    return text;
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    let calcule = Math.pow(x,y);
    return calcule ;
}
var valeurAbsolue = function (nombre) {
    let calcule = Math.abs(nombre);
    return calcule;
}
var valeurAbsolueArray = function (array) {
    let nmbr = [];
    let i;
    for( i = 0; i < array.length; i++){
       nmbr[i] = Math.abs(array[i]);
    }
    return nmbr;
}
var sufaceCercle = function (rayon) {
    let calcul = Math.PI * rayon * rayon;
    let cercle = Math.round(calcul);
    return cercle;
}
var hypothenuse = function (ab, ac) {
    let hypo = Math.hypot(ab ,ac);
    return hypo;
}
var calculIMC = function (poids, taille) {
    let imc = poids / (taille * taille );
    let virgule = Number(imc.toFixed(2));
    return virgule;
}
