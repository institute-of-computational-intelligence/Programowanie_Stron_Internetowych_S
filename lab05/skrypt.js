function zad1()
{
    var temp = document.getElementById("nr1");
    if(temp.style.color == "red")
    {
        temp.style.color = "black";
        temp.style.fontSize = "100%";
        temp.style.fontFamily = "Times New Roman";
    }
    else
    {
        temp.style.color = "red";
        temp.style.fontSize = "200%";
        temp.style.fontFamily = "Arial";
    }
}

var button1 = document.querySelector("#b1");
button1.addEventListener("click", zad1);



function zad2()
{
    var obraz = document.querySelector("#img2");
    var adres = document.querySelector("#t2").value;
    obraz.src = adres;
}

var button2 = document.querySelector("#b2");
button2.addEventListener("click", zad2);



function zad3()
{
    var odnosnik = document.querySelector("#t31").value;
    var elem = document.createElement("a");
    elem.href = odnosnik;
    elem.target = "_blank";
    var node = document.createTextNode(" Odnosnik ");
    elem.appendChild(node);
    var lista = document.querySelector("ul>li");
    lista.appendChild(elem);
}

var button3 = document.querySelector("#b3");
button3.addEventListener("click", zad3);



function mOver(obj)
{
    var data = new Date();
    var d = document.querySelector("div");
    d.innerHTML = data.getDate() + "/" + (data.getMonth()+1) + "/" + data.getFullYear();
}

function mOut(obj)
{
    var d = document.querySelector("div");
    d.innerHTML = "TEKST";
}

function zad4()
{
    var d = document.querySelector("div").textContent;
    document.querySelector("#p4").innerHTML = d;
}

var div4 = document.querySelector("div");
div4.addEventListener("click", zad4);



function zad5()
{
    var nav = document.querySelector("nav");
    //nav.childNodes
}

var button5 = document.querySelector("nav");
button5.addEventListener("click", zad5);








