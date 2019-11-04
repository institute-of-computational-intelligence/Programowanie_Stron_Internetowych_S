function zad1_1(){
    var p = document.querySelectorAll('p');
    /*var p1 = document.getElementById('p1');
    p1.style.fontSize = "30px";*/
    p[0].style.fontSize = "30px"; 
    p[0].style.color = "red";
    p[0].style.fontFamily = "sans-serif";
    console.log(p);
}

document.getElementById("zad1").addEventListener('click', zad1_1)

function zad2_1(){
    var image = document.getElementById('myImage');
    var obrazek = document.getElementById('obrazek');
    console.log(obrazek.value);
    image.src = obrazek.value;
}

document.getElementById("zad2").addEventListener('click', zad2_1);

function zad3_1(){
    var link = document.getElementById('gdzie').value;
    var nazwa = document.getElementById('nazwa').value;
    var listaa = document.getElementById('lista');
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.setAttribute('href', link);
    a.appendChild(document.createTextNode(nazwa));
    li.appendChild(a);
    listaa.insertBefore(li, listaa.childNodes[0]);
}

document.getElementById('zad3').addEventListener('click', zad3_1);

var dataa;
var kopiaaa= document.getElementById('div1').innerHTML;

function data(element){
    dataa = Date();
    element.innerHTML = Date();
}

function powrot(element){
    element.innerHTML = kopiaaa;
}

function kopia(element){
    document.getElementById('kopiaaa').innerHTML = dataa; 
}

function zad5_1(co){
    switch(co){
        case 0:
            break;

        case 1:
            break;

        case 2:
            break;
    }
}

document.getElementById('strona_glowna').addEventListener('click', zad5_1.blind(null, 0));
document.getElementById('o_nas').addEventListener('click', zad5_1.blind(null, 0));
document.getElementById('produkty').addEventListener('click', zad5_1.blind(null, 0));
