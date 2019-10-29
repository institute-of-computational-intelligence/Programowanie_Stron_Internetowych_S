//Zad1
const rand = Math.floor(Math.random() * 10) + 1;
//const handler = addEventListener('click', checkNumber);



function checkNumber() {

    const btn = document.querySelector('sendBtn');
    btn.addEventListener('click', () => {
        const inputValue = document.querySelector("#userNumber").value;
        console.log(inputValue);
    });
}