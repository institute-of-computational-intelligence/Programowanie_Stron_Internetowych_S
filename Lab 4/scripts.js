const r=Math.ceil(Math.random()*10);
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x > r && (x>=1 && x<=10)) {
      alert("Liczba jest za duża");
      return false;
    }
    else if (x < r && (x>=1 && x<=10)) {
        alert("Liczba jest za mała");
        return false;
    }
    else if (x == r && (x>=1 && x<=10)) {
        alert("Udało ci się zgadnąć!");
        return false;
      }
    else{
        alert("Nie prawidłowy zakres");
        return false;
    }
  }
function multiplyBy() {
    l1=document.getElementById("first").value;
    l2=document.getElementById("second").value;
    document.getElementById("result").innerHTML = l1 * l2;
  }
function divideBy() {
    l1=document.getElementById("first").value;
    l2=document.getElementById("second").value;
    document.getElementById("result").innerHTML = l1 / l2;
}
function CtoF() {
    C=document.getElementById("cel").value;
    document.getElementById("result2").innerHTML = C*9/5+32;
}
function adon() {
    a=document.getElementById("a").value;
    n=document.getElementById("n").value;
    document.getElementById("result3").innerHTML = Math.pow(a, n);
}
function silnia(){
    b=document.getElementById("b").value;
    d=b;
    var i;
    for(i=1;i<b;i++){
        d=d*(b-i);
    }
    document.getElementById("result4").innerHTML = d;
}

const tab1=[-3,8,7,6,5,-4,3,2,1];
const tab2=[];
let min=tab1[0];
let pos;
var max=tab1[0];
for (i=0; i<tab1.length; i++)
{
        if (max<tab1[i]) max=tab1[i];
}

for (var i=0;i<tab1.length;i++)
{
        for (let j=0;j<tab1.length;j++)
        {
                if (tab1[j]!="x")
                {
                        if (min>tab1[j]) 
                        {
                                min=tab1[j];
                                pos=j;
                        }
                }
        }
        tab2[i]=min;
        tab1[pos]="x";
        min=max;
}
console.log(tab2);