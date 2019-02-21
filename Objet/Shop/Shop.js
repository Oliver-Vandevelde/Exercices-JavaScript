document.getElementById("All").onclick = function() {AllItems()};
document.getElementById("Dispo").onclick = function() {AllDispo()};
document.getElementById("LvL").onclick = function() {LvL10()};


let x , y , z = "";

let Shop = {
    "Item_To_Shell": [
        {"Name":"Epee", "Physic": 15, "Magic": 8, "minLevel": 14, "available": true },
        {"Name":"Hache", "Physic": 15, "Magic": 2, "minLevel": 8, "available": true },
        {"Name":"Bâton","Physic": 5, "Magic": 15, "minLevel": 12, "available": false },
        {"Name":"Dague","Physic": 5, "Magic": 5, "minLevel": 1, "available": true },
        {"Name":"Lance", "Physic": 10, "Magic": 2, "minLevel": 5, "available": true },
        {"Name":"Baguette", "Physic": 2, "Magic": 10, "minLevel": 5, "available": false }
    ]
}

for(let Items in Shop){

    console.log( Shop[Items] );

}

function AllItems(){

    y = "";

    for (x in Shop.Item_To_Shell) {
        y += "\n" + Shop.Item_To_Shell[x].Name;
    }

    alert("Voici tous les item que j'ai a vous vendre :" + y);

}

function AllDispo(){

}

function LvL10(){

}