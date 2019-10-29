var randomNumber = 0;

document.querySelector('#btn1').addEventListener('click', function(e){
e.preventDefault();
randomNumber = Math.floor(Math.random() * 10)+1;
console.log(randomNumber);
}, false);

document.querySelector('#btn2').addEventListener('click', function(e){
e.preventDefault();
var feedbackPara = document.createElement('p');
feedbackPara.innerHTML = (guessNumber.value == randomNumber) ? 'Zgadles!' : 'Niepoprawna liczba';
document.querySelector('.wrapper').appendChild(feedbackPara);
}, false);