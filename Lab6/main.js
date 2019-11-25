$(document).ready(function(){
    $("#zmienKolor").click(function(){
        $('p').css("color","blue");
        $('div').css("color","red");
        $('.orange').css("color","orange");
    });
    $("#poczatek").click(function(){
        $('#dodawanieDoListy').prepend('<li>'+$('#textDoListy').val()+'</li>')
    });
    $("#koniec").click(function(){
        $('#dodawanieDoListy').append('<li>'+$('#textDoListy').val()+'</li>')
    });
    $('#dodajDiva').click(function(){
        $('body').find("#mojDiv").prepend('<div><p>Przykladowy teskt przed mojDiv </p></div>')
    });

    $('#dodajKlase').click(function(){
        $('p').last().addClass("klasaP");
    });

    $('#dodajObramowanie').click(function(){
        $("p#mojZnacznik").parent().css({"border-color": "black", 
        "border-width":"1px", 
        "border-style":"dotted"});
    });
    $('#zad8').click(function(){
        $('body').find("h1").siblings().css("color","green")
    });
});

