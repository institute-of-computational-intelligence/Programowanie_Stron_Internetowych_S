const zad1 = function (e) {
    document.getElementById("zad1P").style.color = '#ff0000';
    document.getElementById("zad1P").style.fontSize = '24px';
    document.getElementById("zad1P").style.fontFamily = 'sans-serif';
}

document.getElementById("zad1Btn").addEventListener('click', zad1);

const zad2 = function (e) {
    document.getElementById("zad2Img").src = document.getElementById("zad2Input").value;
}

document.getElementById("zad2Btn").addEventListener('click', zad2);

const zad3 = function (e) {
    let lista = document.getElementById("zad3List");
    let node = document.createElement("li");

    let link = document.createElement("a");
    link.setAttribute('href', document.getElementById("zad3_2Input").value);
    let textnode = document.createTextNode(document.getElementById("zad3_1Input").value);
    link.appendChild(textnode);

    node.appendChild(link);
    lista.insertBefore(node, lista.childNodes[0]);
}

document.getElementById("zad3Btn").addEventListener('click', zad3);

let zad4Copy = document.getElementById("zad4Div").innerHTML
const zad4Enter = function (e) {
    document.getElementById("zad4Div").innerHTML = Date();
}

document.getElementById("zad4Div").addEventListener('mouseenter', zad4Enter);

const zad4Leave = function (e) {
    document.getElementById("zad4Div").innerHTML = zad4Copy;
}

document.getElementById("zad4Div").addEventListener('mouseleave', zad4Leave);

const zad4Click = function (e) {
    document.getElementById("zad4DivCopy").innerHTML = document.getElementById("zad4Div").innerHTML;
}

document.getElementById("zad4Div").addEventListener('click', zad4Click);

const zad5 = function (e) {
    var list = e.target.closest('ul');
    for (i = 0; i < list.childElementCount; i++) {
        list.children[i].children[0].classList.remove("active");
    }
    e.target.classList.toggle('active');
}

var list = document.getElementById("menuList");
for (i = 0; i < list.childElementCount; i++) {
    list.children[i].children[0].addEventListener("click", zad5);
}