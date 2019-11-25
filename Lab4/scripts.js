const liczba=Math.floor(Math.random()*10)+1;
console.log(liczba);

//var zgadnij=prompt("Zgadnij liczbe");

/*if(zgadnij == liczba)
{
    console.log("Udało ci sie zgadnać liczbę")
}
else
{
    console.log("Nie udało ci się zgadnać liczby")
}*/

function multiplyBy()
{
    var a=document.getElementById("firstNumber").value;
    var b=document.getElementById("secondNumber").value;

    var c=a*b;

    document.getElementById("result").innerHTML=c;
}

function divideBy()
{
    var a=document.getElementById("firstNumber").value;
    var b=document.getElementById("secondNumber").value;

    var c=a/b;

    document.getElementById("result").innerHTML=c;
}

function convertToFahr()
{
    var a=document.getElementById("degree").value;
    var c=(a*1.8)+32;

    document.getElementById("przelicz").innerHTML=c;
}

function convertToCelc()
{
    var a=document.getElementById("degree").value;
    var c=(5/9) * (a-32);

    document.getElementById("przelicz").innerHTML=c;
}

function potegowanie()
{
    var a=document.getElementById("a").value;
    var n=document.getElementById("n").value;

    document.getElementById("wynik").innerHTML=Math.pow(a,n);
}