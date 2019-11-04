const zmien = function(e)
{
    document.getElementById("znacznikP").style.color = "blue";
    document.getElementById("znacznikP").style.fontSize = "25px";
    document.getElementById("znacznikP").style.fontFamily = "Impact, Charcoal, sans-serif";
}

document.getElementById("buttonP").addEventListener('click', zmien);

const zmienObraz = function(e)
{
    document.getElementById("mojObrazek").src = document.getElementById("nowaSciezka").value;
}

document.getElementById("buttonO").addEventListener('click', zmienObraz);

const dodajL = function(e)
{
    var znacznik = document.createElement("li");
    var tekst = document.getElementById('pierwszyArgument').value;
    var znacznik2 = document.createElement("a");
    znacznik2.href = document.getElementById('drugiArgument').value;
    znacznik2.innerHTML = tekst;
    znacznik.appendChild(znacznik2);
    var elementL = document.getElementById('lista');
    elementL.insertBefore(znacznik, elementL.childNodes[0]);
}

document.getElementById("buttonL").addEventListener('click', dodajL);

const changeText = function(e)
{
    var znacznik = document.createElement("h1");
    znacznik.innerHTML = document.getElementById('hover').value;
    var elementT = document.getElementById('wczesniej');
    elementT.appendChild(znacznik);
}

document.getElementById("hover").addEventListener('click', changeText);