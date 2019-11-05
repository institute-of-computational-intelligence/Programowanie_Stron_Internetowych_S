function addLink() {
    var elem1 = document.getElementById("phref");
    var elem2 = document.getElementById("ptarget");
    var newa = document.createElement("a");
    var node = document.createTextNode("Link do WIMII");
    var newli = document.createElement("li");
    newa.href=elem1.value;
    newa.target=elem2.value;
    newa.appendChild(node);
    newli.appendChild(newa);
    var lista = document.getElementById("lista");
    lista.insertBefore(newli, lista.childNodes[0]);
}

var el = document.getElementById("przycisk");
el.addEventListener("click", addLink, false)

