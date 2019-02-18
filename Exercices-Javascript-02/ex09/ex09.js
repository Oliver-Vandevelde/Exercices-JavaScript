let verif;
let phrases;

function testWhile(){
    phrases = prompt("Donner une phrase avec la lettre p dedans : ")
    verif = phrases.indexOf('p');

    while(verif == -1){
        phrases = prompt("Donner une phrase avec la lettre p dedans : ");
        verif = phrases.indexOf('p');
    }
    alert("' " + phrases +" '");
    
}