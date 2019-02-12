function JourDeLaSemaine(){
    switch (new Date().getDay()) {
        case 0:
            alert("dimanche");
          break;
        case 1:
            alert("lundi");
          break;
        case 2:
            alert("mardi");
          break;
        case 3:
            alert("mercredi");
          break;
        case 4:
            alert("jeudi");
          break;
        case 5:
            alert("vendredi");
          break;
        case  6:
            alert("samedi");
      }
}