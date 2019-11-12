
var firstNumber = document.querySelector('.FirstNumber');
var secondNumber = document.querySelector('.SecondNumber');

firstNumber.focus();
secondNumber.focus();

function multiply() {
    document.getElementById("ResultOfCalculation").innerHTML = "The Result is: " + "<br>" + (Number(firstNumber.value) * Number(secondNumber.value));

}
var MultiplyButton = document.querySelector('.MultiplyButton');
MultiplyButton.addEventListener('click', multiply);


function divide() {
    if(Number(secondNumber.value) === 0)
        document.getElementById("ResultOfCalculation").innerHTML = "Nie można dzielić przez zero!";
    else
        document.getElementById("ResultOfCalculation").innerHTML = "The Result is: " + "<br>" + (Number(firstNumber.value) / Number(secondNumber.value));
}

var DivideButton = document.querySelector('.DivideButton');
DivideButton.addEventListener('click', divide);