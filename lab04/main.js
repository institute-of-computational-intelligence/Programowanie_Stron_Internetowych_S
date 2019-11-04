function $(id)
{
    return document.getElementById(id);
}

function checkNum(e)
{
    if(e.target.value/1 != e.target.value)
        alert("To nie jest poprawna wartość!");
}

function checkInt(e)
{
    if(parseInt(e.target.value) != e.target.value)
        alert("To nie jest poprawna wartość!");
}

function doTheThings()
{
    Array.from(document.getElementsByTagName("input")).forEach(element=>element.addEventListener('change',checkNum));
    $("z6_input").addEventListener('change',checkInt);
    $("z5_input").addEventListener('change',checkInt);
}

//Zad1
var randomNumber = Math.ceil(Math.random()*10);

function zad1() 
{
    if($("z1_input").value == randomNumber)
    {
        $("z1_answer").innerHTML = "Zgadłeś!";
        randomNumber = Math.ceil(Math.random()*10);
    }
    else
    {
        $("z1_answer").innerHTML = "Źle. Spróbuj jeszcze raz.";
    }
}

//Zad2
function zad2_mult()
{
    $("z2_result").value = $("z2_input_A").value*$("z2_input_B").value;
}

function zad2_div()
{
    if($("z2_input_B").value != 0)
        $("z2_result").value = $("z2_input_A").value/$("z2_input_B").value;
    else
        $("z2_result").value = "Error";
}

function zad3_F2C()
{
    $("z3_input").value = ($("z3_input").value-32)*5/9;
}

function zad3_C2F()
{
    $("z3_input").value = $("z3_input").value*9/5+32;
}

function zad4()
{
    $("z4_result").value = Math.pow($("z4_input_A").value,$("z4_input_N").value);
}

function zad5()
{
    var a = $("z5_input").value;
    var result = 1;
    while(a>1)
    {
        result*=a;
        a--;
    }
    $("z5_result").value = result;
}

function zad6()
{
    var n = $("z6_input").value;
    var tab = [];
    var tabR = [];
    for(let i=0;i<n;i++)
    {
        tab[i] = prompt("Podaj wartość tab["+i+"]");
    }
    while(tab.length>0)
    {
        let min = 0;
        for(let i=0;i<tab.length;i++)
        {
            if(parseInt(tab[i])<parseInt(tab[min]))min = i;
        }
        tabR.push(tab[min]);
        tab.splice(min,1,);
    }
    alert("Posortowana Tablica: "+tabR);
}