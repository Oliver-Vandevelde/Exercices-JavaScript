document.getElementById("item").onclick = function() {GiveItem()};

let i = 0;
let PNJ = { 
    "Name":"Rahn",
    "Age":25,
    "Item_To_Give":["Sword","Shield","Potion","Spear","Dagger","Stick"],
}

let Shop = {
    "Item_To_Shell": [
        {"Name":"Epee", "Physic": 15, "Magic": 8, "minLevel": 14, "available": true },
        {"Name":"Axe", "Physic": 15, "Magic": 2, "minLevel": 8, "available": true },
        {"Name":"Stick","Physic": 5, "Magic": 15, "minLevel": 12, "available": true },
        {"Name":"Dagger","Physic": 5, "Magic": 5, "minLevel": 1, "available": true },
        {"Name":"Spear", "Physic": 10, "Magic": 2, "minLevel": 5, "available": true },
        {"Name":"Magic Wand", "Physic": 2, "Magic": 10, "minLevel": 5, "available": true }
    ]
}
for(let Items in Shop){

    console.log( Shop[Items] );

}

for(let Perso in PNJ){

    console.log( PNJ[Perso] );

}

function GiveItem(){

    let longTab = PNJ.Item_To_Give.length;
    let random = PNJ.Item_To_Give[Math.floor(Math.random()*longTab)];
    console.log(random);

    if ((random == PNJ.Item_To_Give[0]) && (i == 0)){
        
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

    }

    console.log(i);
    console.log(PNJ.Item_To_Give);

}