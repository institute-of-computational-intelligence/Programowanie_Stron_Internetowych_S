//2
$(document).ready(function()
    {
        $("#zmienKolor").click(function()
        {
            $("p").css("color", "blue");
            $("div").css("color", "red");
        });
    });


//3
$(document).ready(function()
    {
        $("#zmienKolor2").click(function()
        {
            $(".orange").css("color", "orange");
        });
    });


//4
$(document).ready(function()
    {
        $("#b4poczatek").click(function()
        {
            var tekst = $("#text4").val();
            $("ul").prepend('<li>' + tekst + "</li>");
        });

        $("#b4koniec").click(function()
        {
            var tekst = $("#text4").val();
            $("ul").append('<li>' + tekst + "</li>");
        });
    });


//5
$(document).ready(function()
    {
        $("#mojDiv").prepend('<div> <p> TEKST </p> </div>');
    });


//6
$(document).ready(function()
{
    $("p:last").toggleClass("last");
});


//7
$(document).ready(function()
{
    $("#mojZnacznik").parent().css("border", "solid");
});


//8
/* ????????????????
$(document).ready(function()
{
    $("h1").parent().$("div").css("color", "green");
});
*/


//9
$(document).ready(function()
    {
        $("#chowaj").click(function()
        {
            $("nav").hide(1000);
        });

        $("#pokaz").click(function()
        {
            $("nav").show(1000);
        });

        $("#fade").click(function()
        {
            $("nav").fadeOut(1000);
            $("nav").fadeIn(1000);
        });

        $("#slide").click(function()
        {
            $("nav").slideUp(1000);
            $("nav").slideDown(1000);
        });
    });


//10









