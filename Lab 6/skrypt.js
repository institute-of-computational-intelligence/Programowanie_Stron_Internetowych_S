//Zadanie 2
$(document).ready(function()
    {
        $("#zmienKolor").click(function()
        {
            $(".z").css("color", "blue");
            $(".m").css("color", "red");
        });
    });
//Zadanie 3
 $(document).ready(function()
    {
        $("#zmienKolor1").click(function()   
        {
        $('.orange').css("color", "orange");
         });
    });
    

//Zadanie 4
$(document).ready(function()
    {
        $("#napoczatek").click(function()
        {
            var tekst = $("#text4").val();
            $("ul").prepend('<li>' + tekst + "</li>");
        });

        $("#nakoniec").click(function()
        {
            var tekst = $("#text4").val();
            $("ul").append('<li>' + tekst + "</li>");
        });
    });
//Zadanie 5
    $(document).ready(function()
    {
        $("#mojDiv1").click(function()
        {
        
            $("#mojDiv").prepend("<div> <p>Dowolny tekst</p> </div>");
        });
    
    });
    //Zadanie 6
    $(document).ready(function(){
        $("#dodaaj").click(function(){

    $( ".pp" ).toggleClass( "next" )
    });
        });
//Zadanie 7
    $(document).ready(function(){
        $("#dodaj").click(function(){

        $( "#mojZnacznik" ).css("border","solid");
     });
    });
//Zadanie 9
     $(document).ready(function(){
          $("#hide").click(function(){
         $( "nav" ).hide(1000)
            });
            $("#show").click(function(){
                $( "nav" ).show(1000)
            });
            $("#fade").click(function(){
                $( "nav" ).fadeOut(1000)
                $( "nav" ).fadeIn(1000)
            });
            $("#slide").click(function(){
                $( "nav" ).slideUp(1000)
                $( "nav" ).slideDown(1000)
            });
        });
//Zadanie 10
     $(document).ready(function(){
        $("#testAnim").click( function(){
            $("#testAnimBlock").animate({
                margin:25
            }, 1500);
        });
    });



 


