

function factorial(x) {
    if(x === 0)
        return 1;
     
    return x * factorial(x-1);
}

function factorialResult() {
    var factorialInput = document.querySelector("#factorialInput");
    var factorialResult = document.getElementById('factorialResult');
    factorialResult.innerHTML = "Result " + Number(factorialInput.value) + "!: " + factorial(Number(factorialInput.value));;
}

var factorialInput = document.querySelector('.CalculateFactorialInputButton');
factorialInput.addEventListener('click', factorialResult);

