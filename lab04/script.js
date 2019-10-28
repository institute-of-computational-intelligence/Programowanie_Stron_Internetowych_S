const num = Math.floor(Math.random()*11);

function losowanie(){
    var number = document.getElementById("losowaniee").value;
    var div = document.getElementById("zmienna");
    if(number == num){
        div.innerHTML = "dobrze";
    }
    else
    {
        div.innerHTML = "zle";
    }
}
document.getElementById("losowaniee").addEventListener('input', losowanie);

function mnozenie(){
    var num1=document.getElementById("first").value;
    var num2=document.getElementById("seconde").value;
    var p=document.getElementById("wynik");
    p.innerHTML = (num1*num2);
}

function dzielenie(){
    var num1=document.getElementById("first").value;
    var num2=document.getElementById("seconde").value;
    var p=document.getElementById("wynik");
    p.innerHTML = (num1/num2);
}

document.getElementById("wykonanie1").addEventListener("click", mnozenie);
document.getElementById("wykonanie2").addEventListener("click", dzielenie);

function konwersja_cel(){
    var wartosc = document.getElementById("konwersja").value;
    var p = document.getElementById("kon");
    p.innerHTML = ((5/9) * (wartosc-32));
}

function konwersja_far(){
    var wartosc = document.getElementById("konwersja").value;
    var p = document.getElementById("kon");
    p.innerHTML = (32 + ((9/5) * wartosc));
}

document.getElementById("celecfusz").addEventListener("click", konwersja_cel);
document.getElementById("faren").addEventListener("click", konwersja_far);

function pow(){
    var a = document.getElementById("a").value;
    var n = document.getElementById("n").value;
    var p = document.getElementById("wyn");
    p.innerHTML = Math.pow(a,n);
}

document.getElementById("wykona").addEventListener("click", pow);

function silniaa(){
    var liczba = document.getElementById("liczba").value;
    var p = document.getElementById("wyn1");
    var wynik=0;
    wynik = liczba;
    liczba--;
    while(liczba > 0){
        wynik = wynik*liczba;
        liczba--;
    }
    p.innerHTML = wynik;
}

document.getElementById("silnia").addEventListener("click", silniaa);

function sortowanie(a = [3,8,7,6,5,-4,3,2,1])
{
    var zamien;
    var n = a.length-1;
    var x=a;
    do {
        zamien = false;
        for (var i=0; i < n; i++)
        {
            if (x[i] > x[i+1])
            {
               var temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               zamien = true;
            }
        }
        n--;
    } while (zamien);
 console.log(x);
}

document.getElementById("sortowanie").addEventListener("click", sortowanie);
