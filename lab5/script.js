
//zad1
function kliknij() {

    let w = document.getElementById("p1");
    w.style.color = "red";
    w.style.fontSize = "150%";
    w.style.fontFamily = "cursive";
}
//zad2
function kliknij2() {
    let w = document.getElementById("text_area").value;
    let e = document.getElementById("img");
    e.src = w;
}

//zad3
function kliknij3() {
    let para = document.createElement("a");
    let w = document.getElementById("text_area2").value;
    let node = document.createTextNode("nowy znacznik");
    para.appendChild(node);
    
    para.href = w;
    
    let element = document.getElementById("ul1");
    let child = document.getElementById("li1");
    element.insertBefore(para, child);
}

function najedz(x){

    const teraz = new Date();
    
    let w = teraz.getFullYear() +"-" + (teraz.getMonth()+1) +"-" + teraz.getDate();
    
    x.innerHTML = w;
}

function odjedz(x){

    x.innerHTML = "Przykładowy napis";
}

function kliknij4(x){

    z = document.getElementById("znacznik");
    z.innerHTML = x.innerHTML;
    
}

function zmiana(x){
    
    w.document.getElementById("od1");
    w.style.fontWeight = "900";
    x.innerHTML = w.innerHTML;
    
    
    
   
}

function powrot(x){
    
    x.innerHTML.style.fontWeight = "0";
}