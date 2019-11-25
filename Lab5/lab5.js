const zmien = function(e)
{
    document.getElementById("znacznikP").style.color = "blue";
    document.getElementById("znacznikP").style.fontSize = "25px";
    document.getElementById("znacznikP").style.fontFamily = "Impact, Charcoal, sans-serif";
}

document.getElementById("buttonP").addEventListener('click', zmien);

/////////////////////////////////////////////////////////////////////////////////

const zmienObraz = function(e)
{
    document.getElementById("mojObrazek").src = document.getElementById("nowaSciezka").value;
}

document.getElementById("buttonO").addEventListener('click', zmienObraz);

/////////////////////////////////////////////////////////////////////////////////

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

/////////////////////////////////////////////////////////////////////////////////

const changeText = function(e)
{
    var znacznik = document.createElement("h1");
    znacznik.innerHTML = document.getElementById('hover').innerText;
    var elementT = document.getElementById('wczesniej');
    elementT.appendChild(znacznik);
}

const changeText2 = function(e)
{
    document.getElementById('hover').innerHTML = Date();
}

var holder = document.getElementById('hover').innerText;

const changeText3 = function(e)
{
    document.getElementById('hover').innerHTML = holder;
}

document.getElementById("hover").addEventListener('click', changeText);
document.getElementById("hover").addEventListener('mouseover', changeText2);
document.getElementById("hover").addEventListener('mouseout', changeText3);

/////////////////////////////////////////////////////////////////////////////////

const changeButton1 = function(e)
{
    document.getElementById("b2").style.backgroundColor = "aqua";
    document.getElementById("b21").style.fontWeight = "100";
    document.getElementById("b1").style.backgroundColor = "yellow";
    document.getElementById("b11").style.fontWeight = "1000";
}

const changeButton2 = function(e)
{
    document.getElementById("b1").style.backgroundColor = "aqua";
    document.getElementById("b11").style.fontWeight = "100";
    document.getElementById("b2").style.backgroundColor = "yellow";
    document.getElementById("b21").style.fontWeight = "1000";
    
}

document.getElementById("b1").addEventListener('click', changeButton1);
document.getElementById("b2").addEventListener('click', changeButton2);