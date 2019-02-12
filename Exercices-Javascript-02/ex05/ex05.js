let b = Number(2);
let a = Number(0);

function affiche(){
    a=b++;
    alert('a est egal a '+a+' \net b est egal a '+b)

    b = Number(2);
    a = Number(0);
    a=++b;
    alert('a est egal a '+a+' \net b est egal a '+b)

    b = Number(2);
    a = Number(0);
    a=b--;
    alert('a est egal a '+a+' \net b est egal a '+b)
    
    b = Number(2);
    a = Number(0);
    a=--b;
    alert('a est egal a '+a+' \net b est egal a '+b)
    
    b = Number(2);
    a = Number(0);
    a+=b++;
    alert('a est egal a '+a+' \net b est egal a '+b)
    
    b = Number(2);
    a = Number(1);
    a+=++b;
    alert('a est egal a '+a+' \net b est egal a '+b)
    
    b = Number(2);
    a = Number(1);
    a-=b++;
    alert('a est egal a '+a+' \net b est egal a '+b)
    
    b = Number(2);
    a = Number(1);
    a-=++b;
    alert('a est egal a '+a+' \net b est egal a '+b)
    
    b = Number(2);
    a = Number(1);
    a+=b--;
    alert('a est egal a '+a+' \net b est egal a '+b)
    
    b = Number(2);
    a = Number(1);
    a+=--b;
    alert('a est egal a '+a+' \net b est egal a '+b)

    b = Number(2);
    a = Number(0);
}