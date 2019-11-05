//*zad1
document.querySelector('#btn-1').addEventListener('click', () => {
    const p = document.getElementById('zad1');
    p.style.fontWeight = 'bold';
    p.style.fontSize = '20px';
    p.style.fontFamily = 'Arial';
    p.style.color = 'red';
})
//*zad2
document.querySelector('#btn-2').addEventListener('click', () => {
    const image = document.getElementById('img');
    image.src = 'https://i.stack.imgur.com/vcsOT.png';
})
//*zad3