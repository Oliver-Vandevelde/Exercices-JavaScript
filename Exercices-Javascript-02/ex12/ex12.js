let menu;
let nmbr;
let calcule;
// nmbr = Number(nmbr); sans cette commande sa ne fais pas certain calcule comme il faut. ( ex le deuxieme 10 + 273 = 10273 sans la commande.)

function conversionTemperature(){
    
    menu = prompt("0. Fin du programe \n1. De °C vers °F \n2. de °C vers K \n3. De °F vers °C \n4. De °F vers K \n5. De K vers °C \n6. De K vers °F")

    switch (menu){

        case "0":
            break;

        case "1":

            nmbr = prompt("Degré Celsius Svp");
            nmbr = Number(nmbr);
            calcule = ( nmbr * 9/5 ) + 32;
            alert("La converstion de "+nmbr+"°C est de "+calcule+"°F");
            break;

        case "2":

            nmbr = prompt("Degré Celsius Svp");
            nmbr = Number(nmbr);
            calcule = nmbr + 273.15;
            alert("La converstion de "+nmbr+"°C est de "+calcule+" K");
            break;

        case "3":

            nmbr = prompt("Degré Fahrenheit Svp");
            nmbr = Number(nmbr);
            calcule = ( nmbr - 32) / (9/5);
            alert("La converstion de "+nmbr+"°F est de "+calcule+"°C");
            break;

        case "4":

            nmbr = prompt("Degré Fahrenheit Svp");
            nmbr = Number(nmbr);
            calcule = (( nmbr - 32) * (5 / 9)) + 273.15;
            alert("La converstion de "+nmbr+"°F est de "+calcule+" K");
            break;

        case "5":

            nmbr = prompt("Degré Kelvin Svp");
            nmbr = Number(nmbr);
            calcule = nmbr - 273.15;
            alert("La converstion de "+nmbr+" K est de "+calcule+"°C");
            break;

        case "6":

            nmbr = prompt("Degré Kevin Svp");
            nmbr = Number(nmbr);
            calcule = ( nmbr * 9/5) - 459.67;
            alert("La converstion de "+nmbr+" K est de "+calcule+"°F");
            break;

    }
}