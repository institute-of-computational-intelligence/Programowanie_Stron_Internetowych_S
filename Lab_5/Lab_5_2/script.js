function changeSource() {
    var elem = document.getElementById("pole");
    document.getElementById("myImage").src = elem.value;
}

var el = document.getElementById("przycisk");
el.addEventListener("click", changeSource, false)

