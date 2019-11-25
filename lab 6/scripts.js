function zmienKolor()
{
    $('p').css('color', 'rgb(0, 0, 255)');
    $('div').css('background-color', 'rgb(255, 0, 0)');
    $('.orange').css('color', 'orange');
}

document.getElementById("zmienKolor").addEventListener("click", zmienKolor);

function dodajElementUp()
{
    value = document.getElementById("zad4-noweDane").value;

    $("#zad4").prepend('<li>' + value +'</li>');
}

document.getElementById("zad4-pocz-btn").addEventListener("click", dodajElementUp);

function dodajElementDown()
{
    value = document.getElementById("zad4-noweDane").value;

    $("#zad4").append('<li>' + value +'</li>');
}

document.getElementById("zad4-kon-btn").addEventListener("click", dodajElementDown);

function dodajNowyDiv()
{
    value = document.getElementById("zad4-noweDane").value;

    $("#mojDiv").prepend('<div><p>Dowolny tekst!</p></div>');
}

document.getElementById("zad5-add-btn").addEventListener("click", dodajNowyDiv);


function dodajNowaKlase()
{
    $(document).ready(function()
    {
        $('p').last().addClass("zielonyp");
    });
}

document.getElementById("zad6-add-btn").addEventListener("click", dodajNowaKlase);

function dodajObramowanie()
{
    $("#mojZnacznik").closest("div").css( "border", "3px double green" );
}

document.getElementById("zad7-add-btn").addEventListener("click", dodajObramowanie);

function ZmienH1()
{
    $("div > h1").css("color", "green");
}

document.getElementById("zad8-change-btn").addEventListener("click", ZmienH1);

function hideMenu()
{
    $('menu').hide(100);
}

document.getElementById("zad9-hide-btn").addEventListener("click", hideMenu);

function showMenu()
{
    $('menu').show(100);
}

document.getElementById("zad9-show-btn").addEventListener("click", showMenu);

function fadeinMenu()
{
    $('menu').fadeIn(100);
}

document.getElementById("zad9-fadein-btn").addEventListener("click", fadeinMenu);

function fadeoutMenu()
{
    $('menu').fadeOut(100);
}

document.getElementById("zad9-fadeout-btn").addEventListener("click", fadeoutMenu);

function slideMenu()
{
    $('menu').slideToggle(100);
}

document.getElementById("zad9-slide-btn").addEventListener("click", slideMenu);

function slideMenu()
{
    $('#zad10').animate(
        { 
            "left": "500px",          
            "font-size": "20px"
        }, 
        1000, 
    );
}

document.getElementById("zad10-animate-btn").addEventListener("click", slideMenu);