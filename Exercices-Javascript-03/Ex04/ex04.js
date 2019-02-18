

document.getElementById("button").onclick = function() {effacer()}; // rajoute obligatoire d'un ID avec Name sa ne marchais pas

function effacer(){

    document.getElementById("nom").value = "" ;
    document.getElementById("prenom").value = "" ;
    document.getElementById("ville").value = "" ;
    //document.getElementById("nom","prenom","ville").value = "" ; (chercher comment faire plustard.)
    
}