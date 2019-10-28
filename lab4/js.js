var x=Math.ceil(Math.random()*10);
console.log(x);
window.alert("podaj liczbe od 1 do 10");
var liczba = window.prompt("wpisz tu liczbe","");
if(liczba==x)
{
    window.alert("wygrales");
}else
{
    window.alert("przegrales");
}

function multiply()
{
    n1=0;
    n2=0;
    n1=document.getElementById("n1").value;
    n2=document.getElementById("n2").value;
    document.getElementById("result").innerHTML = parseInt(n1) * parseInt(n2);
}

function divide()
{
    n1=0;
    n2=0;
    n1=document.getElementById("n1").value;
    n2=document.getElementById("n2").value;
    document.getElementById("result").innerHTML = n1 / n2;
}

function cTof(celsius)
{
    var c=celsius;
    var f=c*9/5+32;
    console.log(f);
}
function fToc(fahrenheit)
{
    var f=fahrenheit;
    var c=(f-32)*5/9;
    console.log(c);
}
function poteguj()
{
    n1=document.getElementById("nn1").value;
    n2=document.getElementById("nn2").value;
    document.getElementById("result2").innerHTML = Math.pow(n1,n2);
}
function silnia()
{
    n1=document.getElementById("n11").value;
    var n=n1;
    if(n==0)
    {
        document.getElementById("result23").innerHTML = 1;
    }
    else
    {
        for(var i=1;i<n;i++)
        {
            n1*=i
        }
        document.getElementById("result3").innerHTML = n1;
    }
   
}

function sortuj()
{
    var tab = [3,8,7,6,5,-4,3,2,1,-3];
    document.getElementById("result4").innerHTML = tab;
    
    for(var k=0;k<tab.length;k++)
    {
        
    for(var i=1;i<tab.length;i++)
    {
        if(tab[i-1]>tab[i])
        {
            var tmp=tab[i-1];
            tab[i-1]=tab[i];
            tab[i]=tmp;
        }
        
    }
    }
    document.getElementById("result5").innerHTML = tab;
    


}