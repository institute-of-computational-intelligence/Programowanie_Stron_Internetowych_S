$(document).ready(function () {
    $("#zmienKolor").click(function () {
        $("p").css("color", "blue");
        $("div").css("color", "red");
        $(".orange").css("color", "orange");
    });
    $("#dodajKoniec").click(function () {
        $("#lista").append("<li>" + $("#tekstListy").val() + "</li>");
    });
    $("#dodajPoczatek").click(function () {
        $("#lista").prepend("<li>" + $("#tekstListy").val() + "</li>");
    });
    $("#wstawZnacznik").click(function () {
        $("#mojDiv").before("<div><p>" + $("#tekstDoZnacznika").val() + "</p></div>");
    });

    $("p").last().addClass("styl1");
    $("div#mojZnacznik").css("border", "2px solid gray");

    $("#show").click(function () {
        $("#effectDiv").show();
    });
    $("#hide").click(function () {
        $("#effectDiv").hide();
    });

});