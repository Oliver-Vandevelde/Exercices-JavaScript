let text;

document.getElementById("nom").onkeypress = function() {message()};

function message(){

    text = document.getElementsByName("nom").value;
    alert (text);

}