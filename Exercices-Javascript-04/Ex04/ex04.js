let mdp;
let confirm;

document.getElementById("button").onclick = function () {

    mdp = document.getElementById("motdepasse").value;
    confirm = document.getElementById("confirmation").value;

    if ( mdp == confirm ) {
        
        document.getElementById("motdepasse").style.backgroundColor = "green";
        document.getElementById("confirmation").style.backgroundColor = "green";

    } else {

        document.getElementById("motdepasse").style.backgroundColor = "red";
        document.getElementById("confirmation").style.backgroundColor = "red";

    }
}