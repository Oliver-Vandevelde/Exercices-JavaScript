document.getElementById("button").onclick = function() {GiveItem()};

let PNJ = { 
    "Name":"Rahn",
    "Age":25,
    "Item_To_Give":["Sword","Shield","Potion","Spear","Dagger","Stick"],
}

for(let key in PNJ){

    console.log( PNJ[key] );

}

function GiveItem(){

    let longTab = PNJ.Item_To_Give.length;
    let random = PNJ.Item_To_Give[Math.floor(Math.random()*longTab)];
    console.log(random);

    if(random == PNJ.Item_To_Give[0]){
        
        alert("Vous avez recu une 'Epee' !");
        delete PNJ.Item_To_Give[0];

    }
    else if (random == PNJ.Item_To_Give[1]){
        
        alert("Vous avez recu un 'Bouclier' !");
        delete PNJ.Item_To_Give[1];

    }
    else if (random == PNJ.Item_To_Give[2]){
        
        alert("Vous avez recu une 'Potion' !");
        delete PNJ.Item_To_Give[2];

    }
    else if (random == PNJ.Item_To_Give[3]){
        
        alert("Vous avez recu une 'Lance' !");
        delete PNJ.Item_To_Give[3];


    }
    else if (random == PNJ.Item_To_Give[4]){
        
        alert("Vous avez recu une 'Dague' !");
        delete PNJ.Item_To_Give[4];


    }
    else if (random == PNJ.Item_To_Give[5]){
        
        alert("Vous avez recu un 'Baton' !");
        delete PNJ.Item_To_Give[5];

    }
    else {

        alert("Je n'ai plus d'objet pour toi ! \n\nPart maintenant aventurier")
    }

    console.log(PNJ.Item_To_Give);

}