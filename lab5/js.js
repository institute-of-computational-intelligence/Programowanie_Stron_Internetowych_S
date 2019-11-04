function z1()
{
    document.getElementById("p1").style.color ="BLUE";
    document.getElementById("p1").style.fontFamily ="arial";
    document.getElementById("p1").style.fontSize ="50px";
    document.getElementById("p1").style.fontWeight ="bold";
}

function z2()
{
  
    document.getElementById("im2").src=  document.getElementById("adres").value;
}

function z3()
{
    var li = document.createElement(li);
    
    var adres = document.createTextNode(document.getElementById("adres3"));
   
    
    var a='<a href='+document.getElementById("adres3")+'<li>Kliknij mnie</li></a><br>';
    

    document.getElementById("ul3").innerHTML=a+document.getElementById("ul3").innerHTML;
}




function z4()
{
    var data= new Date();
    var godzina= data.getHours()+":"+data.getMinutes()+":"+data.getSeconds();
    document.getElementById("d4").innerText=godzina;
    
}

function z44()
{
    document.getElementById("d4").innerText="moja zawartosc";
    document.getElementById("p4").innerText="Tu bedzie czas";
}
function z444()
{
    var data= new Date();
    document.getElementById("p4").innerText=data.getHours()+":"+data.getMinutes()+":"+data.getSeconds();;
}

function z5(x,y)
{
    if(y==0)
    {
        document.getElementById(x).value=x; 
        document.getElementById(x).style.backgroundColor="red";
        document.getElementById(x).style.fontWeight="bold";
    }else
    {
        document.getElementById(x).value="zad1";
        document.getElementById(x).style.fontWeight="";
        document.getElementById(x).style.backgroundColor="";
    }
    
}
