// Get a random integer from 1 to 10 inclusive
const num = Math.ceil(Math.random() * 10);
console.log(num);
 const gnum = prompt('Guess the number between 1 and 10 inclusive');
 if (gnum == num)
   document.body.innerHTML='Matched';
  else
  document.body.innerHTML='Not matched, the number was '+num;

function multiplyBy()
{
        num1 = document.getElementById("pierwsza").value;
        num2 = document.getElementById("druga").value;
        document.getElementById("wynik").innerHTML = num1 * num2;
}

function divideBy() 
{ 
        num1 = document.getElementById("pierwsza").value;
        num2 = document.getElementById("druga").value;
        document.getElementById("wynik").innerHTML = num1 / num2;
}
