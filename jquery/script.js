$("#zmienKolor").click(function(){
    $("p").css("background-color", "blue");
    $("div").css("background-color", "red");
    $(".orange").css("background-color", "orange");
});

$("#naPoczatek").click(function(){
    $("#lista").prepend(
        $("<li>").text($("#wartosc").val()));
});

$("#naKoniec").click(function(){
    $("#lista").append(
        $("<li>").text($("#wartosc").val())
    );
});

$("#dodajDiv").click(function(){
    $('<div><p>'+$("#text").val()+'</p></div>').insertBefore("#mojDiv");
});

$('p').last().addClass("ostatnieP");

//$(document).read(function(){
    $("#mojZnacznik").parent("div").css(
        "border", "1px solid black"
    );
//});
/*
console.log($("body > "));
console.log($("div").children("h1"));
$("h1").parent("div").css("background-color", "green");*/
$("div h1")
          .parent()
          .siblings()
          .addBack()
          .children()
          .css( "color", "green" );


znak = 0;
$("#animation").click(function(){
    if(znak % 2 == 0){
        $("#mojZnacznik").slideUp(1000)
    } else {
        $("#mojZnacznik").slideDown(1000)
    }
    znak++;
});

znak2 = 0
$(document).ready(function(){
    $("#animation2").click(function(){
        if(znak2 % 2 == 0){
            $("#przesun").animate({
                marginLeft: '250px',
                height: '150px',
                width: '150px',
                fontSize: '30px'
            });
        } else {
            $("#przesun").animate({
                marginLeft: '0px',
                height: '100px',
                width: '100px',
                fontSize: '30px'
            });
        }
        znak2++;
    });
});