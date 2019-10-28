//Zad 1

const comBox = document.querySelector('div#com')
const guessInput = document.querySelector('input#guess')
const guessBtn = document.querySelector('button#guessBtn')

guessBtn.onclick = () => {
    let rand = Math.ceil(Math.random()*10)

    if( rand == guessInput.value){
        comBox.innerHTML = 'You win!'
    } else {
        comBox.innerHTML = 'Unfortunate :( Correct number is: ' + rand
    }
}

//Zad 2

const firstNum = document.querySelector('input#firstNumber')
const secondNum = document.querySelector('input#secondNumber')

const multBtn = document.querySelector('button#multiply')
const divideBtn = document.querySelector('button#divide')

const resultBox2 = document.querySelector('div#result2')

multBtn.onclick = () => { 
    let result = firstNum.value * secondNum.value
    if(isNaN(result)){
        resultBox2.innerHTML = 'Incorrect input'
    } else {
        resultBox2.innerHTML = 'The result is: <br> ' + result
    }
}

divideBtn.onclick = () => { 
    let result = firstNum.value / secondNum.value
    if(isNaN(result)){
        resultBox2.innerHTML = 'Incorrect input'
    } else {
        resultBox2.innerHTML = 'The result is: <br> ' + result
    }
}

//Zad 3

const dgInput = document.querySelector('input#degrees')
const celsiusBtn = document.querySelector('button#celsius')
const fahrenheitBtn = document.querySelector('button#fahrenheit')
const resultBox3 = document.querySelector('div#result3')
celsiusBtn.onclick = () => { 
    let result = (dgInput.value - 32) * 5 / 9
    if(isNaN(result)){
        resultBox3.innerHTML = 'Incorrect input'
    } else {
        resultBox3.innerHTML = result + ' C'
    }
}

fahrenheitBtn.onclick = () => { 
    let result = (dgInput.value * 5 / 9) + 32
    if(isNaN(result)){
        resultBox3.innerHTML = 'Incorrect input'
    } else {
        resultBox3.innerHTML = result + ' F'
    }
}

//Zad 4

const baseInput = document.querySelector('input#base')
const expInput = document.querySelector('input#exp')
const expBtn = document.querySelector('button#evalExp')
const resultBox4 = document.querySelector('div#result4')

expBtn.onclick = () => {
    resultBox4.innerHTML = Math.pow(baseInput.value, expInput.value)
}

//Zad 5

const factorialInput = document.querySelector('input#factorial')
const factorialBtn = document.querySelector('button#evalFactorial')
const resultBox5 = document.querySelector('div#result5')

factorialBtn.onclick = () => { 
    let result = 1
    for(let i = 2; i <= factorialInput.value; i++){
        result *= i
    }
    resultBox5.innerHTML = result
}

//Zad 6

const arrayInput = document.querySelector('input#array')
const sortBtn = document.querySelector('button#sortBtn')
const resultBox6 = document.querySelector('div#result6')

sortBtn.onclick = () => {
    let str = arrayInput.value
    let arr = str.split(' ')
    arr.sort()
    let result = arr.join(' ')
    resultBox6.innerHTML = result
}