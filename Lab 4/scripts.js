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

const arr1=[-3,8,7,6,5,-4,3,2,1];
const arr2=[];
let min=arr1[0];
let pos;
var max=arr1[0];
for (i=0; i<arr1.length; i++)
{
        if (max<arr1[i]) max=arr1[i];
}

for (var i=0;i<arr1.length;i++)
{
        for (let j=0;j<arr1.length;j++)
        {
                if (arr1[j]!="x")
                {
                        if (min>arr1[j]) 
                        {
                                min=arr1[j];
                                pos=j;
                        }
                }
        }
        arr2[i]=min;
        arr1[pos]="x";
        min=max;
}
console.log(arr2);