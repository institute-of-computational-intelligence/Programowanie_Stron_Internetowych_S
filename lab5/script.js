function zmiana() {
    document.getElementById("p1").style.color = "green";
    document.getElementById("p1").style.fontSize = "34px";
    document.getElementById("p1").style.fontFamily = "Arial";
}

function zmienAdres() {
    var adres = document.getElementById("img").value;
    document.getElementById("obraz").src = adres;
}

function dodajAdres() {
    var link = document.createElement("a");
    var l = document.createElement("li");
    var tekst = document.getElementById("nazwa").value;
    var adres = document.getElementById("adres").value;
    link.href = adres;
    link.innerText = tekst;
    l.appendChild(link);

    var element = document.getElementById("lista");
    element.appendChild(l);
}

function mOver(obj) {
    obj.innerHTML = Date();
}

function mOut(obj) {
    obj.innerHTML = "Lorem ipsum dolor sit amet"
}

function mDown(obj) {
    var tekst = obj.value;
    var node = document.createTextNode(tekst);
    var pojemnik = document.getElementById("data").
    pojemnik.appendChild(node);

}