
var TextAndDateDIV = document.getElementById('TextAndDateDIV');

TextAndDateDIV.onmouseout = function() {
    TextAndDateDIV.innerHTML = "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
}

TextAndDateDIV.onmouseover = function() {
    n =  new Date();
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();
    TextAndDateDIV.innerHTML = "Current Date: " + d + "." + m + "." + y;
}

TextAndDateDIV.onclick = function() {
    var SecondDiv = document.getElementById('ContainerForCopyDate');
    SecondDiv.innerHTML = TextAndDateDIV.textContent;
}
