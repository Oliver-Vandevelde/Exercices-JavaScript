

document.getElementById("button").onclick = function() {guessLetter()};

function guessLetter(){
    
    let gagner = ['B','O','N','J','O','U','R'];
    let pendu = ['_ ','_ ','_ ','_ ','_ ','_ ','_ ',];
    let lettre;
    
    while (pendu.indexOf("_ ") != -1){
        
        alert("Trouver le mot suivant : \n"+pendu);
        lettre = prompt("Choissisez une lettres.");
        lettre = lettre.toUpperCase();
        
        if (lettre == gagner[0]){
            pendu.splice(0,1,'B');
        }
        else if (lettre == gagner[1,4]){
            pendu.splice(1,1,'O');
            pendu.splice(4,1,'O');
        }
        else if (lettre == gagner[2]){
            pendu.splice(2,1,'N');
        }
        else if (lettre == gagner[3]){
            pendu.splice(3,1,'J');
        }
        else if (lettre == gagner[5]){
            pendu.splice(5,1,'U');
        }
        else if (lettre == gagner[6]){
            pendu.splice(6,1,'R');
        }
        else{
            alert("La lettre "+lettre+" n'est pas une lettres valide")
        }
    }
    alert("Felicitation tu as trouver le mot "+gagner);
}