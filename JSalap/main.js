function osszeadas()
    {
        let a,b,c;
        a = Number(document.getElementById("ossze1").value);
        b = Number(document.getElementById("ossze2").value);
        c = a + b;
        document.getElementById("osszeg").value= c;
    }
function kivonas()
    {
        let a,b,c;
        a = document.getElementById("kiv1").value;
        b = document.getElementById("kiv2").value;
        c = a - b;
        document.getElementById("kulonbseg").value= c;
    }
function szorzas()
    {
        let a,b,c;
        a = document.getElementById("szor1").value;
        b = document.getElementById("szor2").value;
        c = a * b;
        document.getElementById("szorzat").value= c;
    }
function osztas()
    {
        let a,b,c;
        a = document.getElementById("oszt1").value;
        b = document.getElementById("oszt2").value;
        c = a / b;
        document.getElementById("osztag").value= c;
    }

function karakter()
    {
        let darab;
        darab = document.getElementById("bemenet").value.length;
        document.getElementById("karakter").value= darab;
    }