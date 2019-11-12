var expResult = document.getElementById('expResult');
function exp() {
    var a = parseFloat(document.getElementById('base').value, 10);
    var n = parseInt(document.getElementById('power').value, 10);
    var result = 1;
    for(i = 0; i < n; i++) {
        result *= a
    }
    expResult.innerHTML = "Result = " + result;
}
var expButton = document.querySelector('.expButton');
expButton.addEventListener('click', exp);

