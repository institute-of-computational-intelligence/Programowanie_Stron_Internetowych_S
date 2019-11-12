
var getParagraph = document.getElementById('zad1Paragraph');
function changeStyle() {
    
    getParagraph.style.fontSize = "x-large";
    getParagraph.style.color = "green";
    getParagraph.style.fontFamily = "Impact,Charcoal,sans-serif"; 
}
var buttonForChangeStyle = document.querySelector('.buttonForChangeStyle');
buttonForChangeStyle.addEventListener('click', changeStyle);