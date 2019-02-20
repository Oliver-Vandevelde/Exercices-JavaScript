let message;
let Try = 0;

document.getElementById("button").onclick = function() {jeux()};

function aleatoire(min, max){

    return Math.floor(Math.random() * (max - min + 1)) + min ;
    
 }

 random = aleatoire(20,80);

function jeux(){

    message = prompt("Donnez un prix entre 20 et 80");
    message = Number(message);

    while ( message != random ){

        Try++;

        if ( message > random ){

            alert("\nC'est moins.");

        }

        else if ( message < random ){

            alert("\nC'est plus.");

        } 

        else {

            alert("\nDonnez un prix j'ai dis !");

        }

        message = prompt("Donnez un prix entre 20 et 80");
        message = Number(message);

    }

    alert("\nC'est juste tu as trouvé en "+Try+" coups.");

}