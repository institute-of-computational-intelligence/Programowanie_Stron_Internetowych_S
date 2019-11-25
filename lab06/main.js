$(document).ready(()=>
{
    $("body").hide();
    $("body").fadeIn();

    $("button#zmienKolor").click(()=>
    {
        $("p").css("color","blue");
        $("div").css("color","red");
        $(".orange").css("color","orange");
    });

    $("button#addLast").click(()=>
    {
        $("ul").append(`<li>${$("#input1").val()}</li>`);
        $("ul li").last().hide();
        $("ul li").last().slideDown();
    });

    $("button#addFirst").click(()=>
    {
        $("ul").prepend(`<li>${$("#input1").val()}</li>`);
        $("ul li").first().hide();
        $("ul li").first().slideDown();
    });

    $("#mojDiv").before("<div><p>Dowolny Tekst</p></div>");

    $("body p").last().addClass("upsideDown");

    $("#mojZnacznik").parent().css("border","1px dashed black");

    $("h1").css("color","green");
    $("h1").siblings().css("color","green");

    $("#animated").click(animate1);
});

function animate1()
{
    $("#animated").animate({left: '250px',fontSize: '32px',paddingTop:'20px',height:'60px'},animate2);
}

function animate2()
{
    $("#animated").animate({left: '0px',fontSize: '16px',paddingTop:'30px',height:'50px'},animate1);
}