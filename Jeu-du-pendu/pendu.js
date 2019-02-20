

document.getElementById("button").onclick = function() {guessLetter()};

function guessLetter(){
    
    let gagner = ['R','E','F','R','I','G','E','R','A','T','E','U','R'];
    let pendu = [' _ ',' _ ',' _ ',' _ ',' _ ',' _ ',' _ ',' _ ',' _ ',' _ ',' _ ',' _ ',' _ '];
    let erreur = []
    let lettre;
    
    while (pendu.indexOf(" _ ") != -1){
        
        alert("Trouver le mot suivant : \n"+pendu+"\n\nMauvaise lettres : "+erreur);
        lettre = prompt("Choissisez une lettres.");
        lettre = lettre[0];
        lettre = lettre.toUpperCase();

        if (lettre == gagner[0]){
            pendu.splice(0,1,'R');
            pendu.splice(3,1,'R');
            pendu.splice(7,1,'R');
            pendu.splice(12,1,'R');
        }
        else if (lettre == gagner[1]){
            pendu.splice(1,1,'E');
            pendu.splice(6,1,'E');
            pendu.splice(10,1,'E');
        }
        else if (lettre == gagner[2]){
            pendu.splice(2,1,'F');
        }
        else if (lettre == gagner[4]){
            pendu.splice(4,1,'I');
        }
        else if (lettre == gagner[5]){
            pendu.splice(5,1,'G');
        }
        else if (lettre == gagner[8]){
            pendu.splice(8,1,'A');
        }
        else if (lettre == gagner[9]){
            pendu.splice(9,1,'T');
        }
        else if (lettre == gagner[11]){
            pendu.splice(11,1,'U');
        }
        else{
            erreur.push(lettre);
            alert("La lettre "+lettre+" n'est pas une lettres valide")
        }
    }
    alert("Felicitation tu as trouver le mot "+gagner);
}