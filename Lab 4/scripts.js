
/*var liczba = Math.floor(Math.random() * 10)+1;
console.log(liczba);
 const liczba2 = prompt('Zgadnij liczbe miedzy 1 a 10');
 if (liczba2 == liczba)
   document.write('Dopsz');
  else
   document.write('Błąd, liczba to: '+liczba);*/
   

   

function mnozenie()
{
    liczba = document.getElementById("liczba").value;
    liczba2 = document.getElementById("liczba2").value;
    document.getElementById("wynik").innerHTML =liczba * liczba2;
}
function dzielenie()
{
    liczba=document.getElementById('liczba').value;
    liczba2=document.getElementById('liczba2').value;
    document.getElementById('wynik').innerHTML=liczba/liczba2;
}



function naFarrenheit()
{
    Farrenheit = document.getElementById("celcius").value;  
    document.getElementById("wynik1").innerHTML= (Farrenheit - 32) * 5 / 9;
}

function naCelcius()
{
    Celsius = document.getElementById("farrenheit").value;
    document.getElementById("wynik2").innerHTML = Celsius * 9 / 5 + 32;
}



function oblicz()
{
   var a=document.getElementById("a").value;
   var n=document.getElementById("n").value;
    var wynikk=1;
    for( i=1; i<=n; i++)
    {
        wynikk*=a;
        
        //i*=n;

    }
    document.getElementById("wynik3").innerHTML= wynikk;
}



function silnia()
{
    var silniaa=1;
    var n = document.getElementById('n').value;
    for(i=1;i<=n;i++)
    {
        silniaa*=i;

    }
    document.getElementById("wynik").innerHTML= silniaa;
}
/*var arr1 = [3,8,7,6,5,-4,3,2,1];
var arr2=[];
var min = arr1[0];
var pos;
max = arr1[0];
for(i=0;i<arr1.length;i++)
{
    if(max<arr1[i])max=arr1[i];
}
for(var i=0;i<arr1.length;i++){
    for(var j=0;j<arr1.length;j++){
        if(arr[j]!='x'){
            if(min>arr1[j]){
                min = arr1[j];
                pos=j;
            }
        }

}
arr2[i]=min;
arr1[pos]='x';
min=max;
}
console.log(arr2);*/
function sortowanie(){
var arr1=[-3,8,7,6,5,-4,3,2,1];
var arr2=[];
var min=arr1[0];
var pos;
var max=arr1[0];
for (i=0; i<arr1.length; i++)
{
        if (max<arr1[i]) max=arr1[i];
}

for (var i=0;i<arr1.length;i++)
{
        for (var j=0;j<arr1.length;j++)
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
document.getElementById("wynik6").innerHTML= arr2;
}


   

