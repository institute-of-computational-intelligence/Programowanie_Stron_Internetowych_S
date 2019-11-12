

var temperatureIn = document.querySelector('.TemperatureInput');
temperatureIn.focus();

function convertTemperature() {
    var selectBoxTemperature = document.getElementById("selectTemperature");
    var selectedValue = selectBoxTemperature.options[selectBoxTemperature.selectedIndex].value;

    if(selectedValue === "celsjusz") 
        document.getElementById("ResultOfConvertingTemperature").innerHTML = temperatureIn.value + "℉ = " +  ((temperatureIn.value - 32) / 1.8) + "℃";
    else if (selectedValue === "fahrenheit")
        document.getElementById("ResultOfConvertingTemperature").innerHTML = temperatureIn.value + "℃ = " +  ((temperatureIn.value * 1.8) + 32) + "℉";
}
var TemperatureButton = document.querySelector('.ConvertTemperatureButton');
TemperatureButton.addEventListener('click', convertTemperature);