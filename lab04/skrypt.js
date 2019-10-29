const liczba = Math.floor(Math.random() * 11);

        function testliczba() {
            var wart = document.getElementById("liczba").value;
            if(wart == liczba) {
                alert("Zgadza sie!!!, wartosc: " + liczba);
                //document.getElementById("nr1").innerHTML = "Zgadza sie!!!, wartosc: " + liczba;
            }
            else {
                alert("Sa rozne!!!, wartosc: " + liczba);
                //document.getElementById("nr1").innerHTML = "Sa rozne!!!, wartosc: " + liczba;
            }
        }

function mnoz() {
    var x = document.getElementById("liczba1").value;
    var y = document.getElementById("liczba2").value;
    document.getElementById("wynik").innerHTML = "Wynik mnozenia: " + x*y;
}

function dziel() {
    var x = document.getElementById("liczba1").value;
    var y = document.getElementById("liczba2").value;
    if(y == 0) {
        document.getElementById("wynik").innerHTML = "Nie dziel przez 0!!!";
    }
    else {
        document.getElementById("wynik").innerHTML = "Wynik dzielenia: " + x/y;
    }
}

function naC() {
    var t = document.getElementById("temp").value;
    document.getElementById("tempwy").innerHTML = "Temp: " + Math.floor( ( (5/9) * (t - 32) ) ) + " C";
}

function naF() {
    var t = document.getElementById("temp").value;
    document.getElementById("tempwy").innerHTML = "Temp: " + Math.floor( (9 * t + (32 * 5) ) / 5 ) + " C";
}

function potega() {
    var x = document.getElementById("a").value;
    var y = document.getElementById("n").value;
    document.getElementById("potegawynik").innerHTML = "Wynik: " + Math.pow(x, y);
}

function silnia() {
    var n = document.getElementById("silnia").value;
    var s = 1;
    for(var i=2; i<=n; ++i) {
        s = s * i
    }
    document.getElementById("wyniksilnia").innerHTML = "Wynik: " + s;
    console.log(s);
}

