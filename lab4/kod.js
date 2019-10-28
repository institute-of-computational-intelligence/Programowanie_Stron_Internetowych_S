// zad1
// const num = Math.ceil (Math.random () * 10);
// const gnum = prompt ('Zgadnij jakąś liczbę z przedziału od 1 do 10');
// if (gnum == num) alert ('Gratulacje, podałeś prawidłową liczbę');
// else alert ('Przykro mi ale prawidłowa liczba to: ' + num);

//zad2
// function multiplyBy () {
//   num1 = document.getElementById ('firstNumber').value;
//   num2 = document.getElementById ('secondNumber').value;
//   document.getElementById ('result').innerHTML = num1 * num2;
// }

// function divideBy () {
//   num1 = document.getElementById ('firstNumber').value;
//   num2 = document.getElementById ('secondNumber').value;
//   document.getElementById ('result').innerHTML = num1 / num2;
// }

// function sumBy () {
//   num1 = document.getElementById ('firstNumber').value;
//   num2 = document.getElementById ('secondNumber').value;
//   document.getElementById ('result').innerHTML =
//     parseInt (num1) + parseInt (num2);
// }

// function subBy () {
//   num1 = document.getElementById ('firstNumber').value;
//   num2 = document.getElementById ('secondNumber').value;
//   document.getElementById ('result').innerHTML = num1 - num2;
// }

//zad3
// function konwersja1 () {
//   num = document.getElementById ('Number').value;
//   const przekonwertowana = num * 9 / 5 + 32;
//   document.getElementById ('result').innerHTML = przekonwertowana;
// }

// function konwersja2 () {
//   num = document.getElementById ('Number').value;
//   const przekonwertowana = (num - 32) * 5 / 9;
//   document.getElementById ('result').innerHTML = przekonwertowana;
// }

//zad4
// function multiplyBy () {
//   num1 = document.getElementById ('firstNumber').value;
//   num2 = document.getElementById ('secondNumber').value;
//   let x = 1;
//   for (let i = 0; i < num2; i++) {
//     x = num1 * x;
//   }
//   document.getElementById ('result').innerHTML = x;
// }

//zad5

function pobierzLiczbe () {
  var num1 = document.getElementById ('firstNumber').value;
  num1 = parseInt (num1);
  document.getElementById ('result').innerHTML = factorial (num1);
}
function factorial (num1) {
  if (num1 == 0) {
    return 1;
  }
  return num1 * factorial (num1 - 1);
}
