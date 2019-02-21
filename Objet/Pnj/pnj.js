document.getElementById("item").onclick = function() {GiveItem()};

//let i;
let PNJ = { 
    "Name":"Rahn",
    "Age":25,
    "Item_To_Give":["l'épée enflamée","le Bouclier du rempart","une Potion de vie","la Lance Divine","une Dague immaculé de sang","le Bâton de la vérité"],
}

for(let Perso in PNJ){

    console.log( PNJ[Perso] );

}

function GiveItem(){

    let longTab = PNJ.Item_To_Give.length;
    let random = Math.floor(Math.random()*longTab);
    let supprimer = PNJ.Item_To_Give.splice(random,1);

    if (longTab <= 0){

        alert("Je n'ai plus d'objets a te proposer aventurier !")

    }
    else{

    alert("Tenez aventurier voici "+supprimer+"\n\nVous avez Obtenu : "+"'"+ supprimer+"'");

    }

    console.log(random);
    console.log(PNJ.Item_To_Give);
    
}
   
    /*if ((random == PNJ.Item_To_Give[0]) && (i == 0)){
        
        alert("\nTien voici l'épée enflamée jeune aventurier ! \n\nVous avez recu une 'Epée enflammée' !");
        delete PNJ.Item_To_Give[0];
        i++;

    }
    else if ((random == PNJ.Item_To_Give[1]) && (i == 0)){
        
        alert("\nTien voici le Bouclier du rempart jeune aventurier ! \n\nVous avez recu le 'Bouclier du rempart' !");
        delete PNJ.Item_To_Give[1];
        i++;

    }
    else if ((random == PNJ.Item_To_Give[2]) && (i == 0)){
        
        alert("\nTien voici une Potion de vie jeune aventurier ! \n\nVous avez recu une 'Potion de vie' !");
        delete PNJ.Item_To_Give[2];
        i++;

    }
    else if ((random == PNJ.Item_To_Give[3]) && (i == 0)){
        
        alert("\nTien voici la Lance Divine jeune aventurier ! \n\nVous avez recu la 'Lance Divine' !");
        delete PNJ.Item_To_Give[3];
        i++;


    }
    else if ((random == PNJ.Item_To_Give[4]) && (i == 0)){
        
        alert("\nTien voici une Dague immaculé de sang jeune aventurier ! \n\nVous avez recu une 'Dague immaculé de sang' !");
        delete PNJ.Item_To_Give[4];
        i++;


    }
    else if ((random == PNJ.Item_To_Give[5]) && (i == 0)){
        
        alert("\nTien voici le Bâton de la vérité jeune aventurier ! \n\nVous avez recu un 'Bâton de la vérité' !");
        delete PNJ.Item_To_Give[5];
        i++;

    }
    else {

        alert("\nJe n'ai plus d'objet pour toi jeune aventurier! \n\nIl est maintenant temps pour toi de partir a l'aventure ,tu ne crois pas ?");

    }*/

    //console.log(i);
    //console.log(PNJ.Item_To_Give);

//}