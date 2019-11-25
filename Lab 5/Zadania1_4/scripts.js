/*  ZADANIE 1*/
function zmien()
{
    document.getElementById('przycisk').style.color = 'blue';
    document.getElementById('przycisk').style.fontSize ='32px';
    document.getElementById('przycisk').style.fontFamily = 'cursive'
} 
function obrazek()
{
    num1=document.getElementById("p3").value;
    document.getElementById("p2").src=num1;
}


function nowyOdnosnik()
{
    var tekst = document.getElementById("id1").value;
    var tekst2 = document.getElementById("id2").value;
    
    var paraa = document.createElement("a");
    var node = document.createTextNode(tekst);
    paraa.appendChild(node);
    paraa.href = "http:\\" + tekst2;

    var para = document.createElement("li");
    para.appendChild(paraa);

    var element = document.getElementById("lista");
    element.appendChild(para);
    element.insertBefore(para, element.childNodes[0]);
}


function mOver()
{
    
    var dzisiaj = new Date(); 

    var dzien = dzisiaj.getDate();
    var miesiac = dzisiaj.getMonth()+1;
    var rok = dzisiaj.getFullYear();

    var godzina = dzisiaj.getHours();
    if(godzina<10) godzina="0"+godzina;
    var minuta = dzisiaj.getMinutes();
    if(minuta<10) minuta="0"+minuta;
    var sekundy = dzisiaj.getSeconds();
    if(sekundy<10) sekundy="0"+sekundy;

    document.getElementById("first").innerHTML=dzien+"/"+miesiac+"/"+rok
    +" | "+godzina+":"+minuta+":"+sekundy;
   // setTimeout("mOver()",1000);

}
function mOut(obj)
{
    obj.innerHTML="Przykładowy tekst na stronie";
}
function change(obj)
{
    var dzisiaj = new Date(); 

    var dzien = dzisiaj.getDate();
    var miesiac = dzisiaj.getMonth()+1;
    var rok = dzisiaj.getFullYear();

    var godzina = dzisiaj.getHours();
    if(godzina<10) godzina="0"+godzina;
    var minuta = dzisiaj.getMinutes();
    if(minuta<10) minuta="0"+minuta;
    var sekundy = dzisiaj.getSeconds();
    if(sekundy<10) sekundy="0"+sekundy;

    document.getElementById("second").innerHTML=dzien+"/"+miesiac+"/"+rok
    +" | "+godzina+":"+minuta+":"+sekundy;
    //setTimeout("change()",1000);
    

}