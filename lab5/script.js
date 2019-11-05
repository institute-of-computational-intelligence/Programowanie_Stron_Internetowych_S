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
document.querySelector('#btn-3').addEventListener('click', () => {
    const hrefValue = document.getElementById('link').value;
    const text = document.getElementById('text').value;
    const a = document.createElement('a');
    const textnode = document.createTextNode(text);
    a.setAttribute("href", hrefValue);
    a.appendChild(textnode);
    console.log(a);

    const list = document.getElementById('list');
    const nodeList = list.firstElementChild;

    console.log(nodeList);
    nodeList.appendChild(a);
})