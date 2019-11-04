var random_value = Math.floor(Math.random()*10+1);

    function random_game()
        {
            var guesses = 0;

            guesses = document.getElementById("checked").value;
            if (guesses < random_value)
            {
                document.getElementById("result").innerHTML="Zgadywana liczba jest nieco większa!";
            }
            else if (guesses > random_value)
            {
                document.getElementById("result").innerHTML="Zgadywana liczba jest nieco mniejsza!";
            }
            else if (guesses = random_value)
            {
            document.write("Brawo udało ci się dobrze odpiowiedzieć! ");
            }
        }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const math = function (e, num)
{
    if (num == 1)
    {
        document.getElementById("mathResult").innerHTML = ("The result is: " + document.getElementById("firstNum").value * document.getElementById("secondNum").value);
    }
    else if (num == 2)
    {
        document.getElementById("mathResult").innerHTML = ("The result is: " + document.getElementById("firstNum").value / document.getElementById("secondNum").value);
    }
}

document.getElementById("Multiply").addEventListener('click', math.bind(null, event, 1));
document.getElementById("Divide").addEventListener('click', math.bind(null, event, 2));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const toFahrenheit = function (e)
{
    document.getElementById("fahrenheit").placeholder = document.getElementById("celsius").value * (9/5) + 32;
}
const toCelsius = function(e)
{
    document.getElementById("celsius").placeholder = (document.getElementById("fahrenheit").value-32) * (5/9);
}

document.getElementById("celsius").addEventListener('input', toFahrenheit);
document.getElementById("fahrenheit").addEventListener('input', toCelsius);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const potegowanie = function (e)
{
    var result = 1;
    for (var i = 0; i<document.getElementById("n").value; i++)
    {
        result = result * document.getElementById("a").value;
    }
    document.getElementById("potegResult").innerHTML = ("The result is: " + result);
}

document.getElementById("Potegowanie").addEventListener('click', potegowanie);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const silnia = function (e)
{
    var result = document.getElementById("n!").value;
    for (var i = 1; i<document.getElementById("n!").value; i++)
    {
        result = result * (document.getElementById("n!").value-i);
    }
    document.getElementById("silniaResult").innerHTML = ("The result is: " + result);
}

document.getElementById("Silnia").addEventListener('click', silnia);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const tab = [];
var showTab = "";


const addTab = function (e)
{
    tab.push(Number(document.getElementById("elementTab").value));
    if(showTab == "")
    {
        showTab += document.getElementById("elementTab").value;
    }
    else
    {
        showTab += ", " + document.getElementById("elementTab").value;
    }

    document.getElementById("liveTab").innerHTML = "Elementy tablicy: [" + showTab + "]";
}

const sortTab = function (e)
{ 
    var loop = 0;
    var showTab2 = ""
    while (loop != tab.length)
    {
        for(var i = 0; i < tab.length - 1; i++)
        {
            if(tab[i] > tab[i+1])
            {
                var box = tab[i];
                tab[i] = tab[i+1];
                tab[i+1] = box;
            }
        }
        loop++;
    }

    for(var i = 0; i < tab.length; i++)
    {
        if(showTab2 == "")
        {
            showTab2 += tab[i];
        }
        else
        {
            showTab2 += ", " + tab[i];
        }
    }

    document.getElementById("resultSort").innerHTML = "Posortowane elementy tablicy: [" + showTab2 + "]";
}

document.getElementById("addTab").addEventListener('click', addTab);
document.getElementById("sortTab").addEventListener('click', sortTab);