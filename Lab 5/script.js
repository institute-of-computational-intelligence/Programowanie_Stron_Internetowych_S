function kolor(){
    document.getElementById("p2").style.color = "blue";
    document.getElementById("p2").style.fontSize="20px";
    document.getElementById("p2").style.fontFamily="Sans-serif";
}

function obraz(){
    sorce=document.getElementById("sorce").value;
    document.getElementById("zdjecie").src = sorce;
}

function odn(){
    var lii=document.createElement("li");
    var para = document.createElement("a");
    tekst=document.getElementById("t1").value;
    para.setAttribute("href",document.getElementById("t2").value)
    var node = document.createTextNode(tekst);
    para.appendChild(node);
    lii.appendChild(para);
    var element = document.getElementById("ul");
    element.insertBefore(lii, element.childNodes[0]);
}
function mOver(obj) {
    obj.innerHTML = Date();
}
function mOut(obj) {
    obj.innerHTML = "tekst"
  }
function klikniecie(obj) {
    t1=obj.innerHTML;
    document.getElementById("zad4.1").innerHTML=t1;
}
function mOver1(obj) {
    obj.style.fontWeight = "bold";
    obj.style.background="blue";
}
function mOut1(obj) {
    obj.style.fontWeight = "normal";
    obj.style.background="";
  }