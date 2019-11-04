function zad1()
{
    document.getElementById("p1").style.color = "blue";

    document.getElementById("p1").style.fontSize = "25px";

    document.getElementById("p1").style.fontFamily = "Impact, Charcoal, sans-serif";
}

document.getElementById("zad1-btn").addEventListener("click", zad1);

function zad2()
{
    link2 = document.getElementById("link2").value;

    document.getElementById("img2").src = link2;
}

document.getElementById("zad2-btn").addEventListener("click", zad2);

function zad3()
{
    value1 = document.getElementById("dane3_1").value;
    value2 = document.getElementById("dane3_2").value;
    
    var paraA = document.createElement("a");
    var nodeText = document.createTextNode(value1);
    paraA.appendChild(nodeText);
    paraA.href = "http:\\" + value2;

    var para = document.createElement("li");
    para.appendChild(paraA);

    var parent = document.getElementById("ul3");
    parent.appendChild(para);
    parent.insertBefore(para, parent.childNodes[0]);
}
var globaltext = document.getElementById("div4").innerHTML;

document.getElementById("zad3-btn").addEventListener("click", zad3);

function mOver()
{
    document.getElementById("div4").innerHTML = Date().toLocaleString();

    document.getElementById("div4").addEventListener("click", mUp);
}

function mOut()
{
    document.getElementById("div4").innerHTML = globaltext;
}

function mUp(obj) {
    document.getElementById("p4").innerHTML = document.getElementById("div4").innerHTML;
}

document.getElementById("div4").addEventListener("mouseover", mOver);
document.getElementById("div4").addEventListener("mouseout", mOut);

function zad5_mOver(sender)
{
    sender.target.style.color = "blue";

    sender.target.style.fontSize = "25px";

    sender.target.style.fontFamily = "Impact, Charcoal, sans-serif";
}

function zad5_mOut(sender)
{
    sender.target.style.color = "black";

    sender.target.style.fontSize = "18px";

    sender.target.style.fontFamily = "Tahoma";
}

document.querySelectorAll(".nav-menu > ul > li a").forEach((elem, index)=>{
    elem.addEventListener("mouseover", zad5_mOver);
}) 
 document.querySelectorAll(".nav-menu > ul > li a").forEach((elem, index)=>{
    elem.addEventListener("mouseout", zad5_mOut);
 });
 
 