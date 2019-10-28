function Add() {
    var a = parseInt(document.getElementById("input1").value);
    var b = parseInt(document.getElementById("input2").value);
    document.getElementById("output").innerHTML = a+b;
  }

  function Divide() {
    var a = parseInt(document.getElementById("input1").value);
    var b = parseInt(document.getElementById("input2").value);
    if(b == 0){
        alert("Nie dzielimy przez 0!!");
    }
    document.getElementById("output").innerHTML = a/b;
  }

  function Multiply() {
    var a = parseInt(document.getElementById("input1").value);
    var b = parseInt(document.getElementById("input2").value);
    document.getElementById("output").innerHTML = a*b;
  }

  function Sub() {
    var a = parseInt(document.getElementById("input1").value);
    var b = parseInt(document.getElementById("input2").value);
    document.getElementById("output").innerHTML = a-b;
  }

function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  return  cToFahr + ' \xB0F.';
}

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  return fToCel + '\xB0C.';
} 

const selectElement = document.getElementById('stopnieC');

selectElement.addEventListener('change', (event) => {
  const result = document.getElementById('stopnieF');
  result.innerHTML = cToF(parseInt(selectElement.value));
})
  
const selectElement2 = document.getElementById('stopnieF2');

selectElement2.addEventListener('change', (event) => {
    const result2 = document.getElementById('stopnieC2');
    result2.innerHTML = fToC(parseInt(selectElement2.value));
})

function exp()
{
    var b = parseInt(document.getElementById("a").value);
    var n = parseInt(document.getElementById("n").value);
    var wynik = document.getElementById('wynik');
        var ans = 1;
        for (var i =1; i <= n; i++)
        {
                ans = b * ans;        
        }
        wynik.innerHTML = ans;
}

function silnia() 
{ 
var x = parseInt(document.getElementById("silnia").value);
  if (x === 0)
 {
    return 1;
 }

 var wynik = document.getElementById('wynikSilnia');
 wynik.innerHTML = x * silnia(x-1);
         
}