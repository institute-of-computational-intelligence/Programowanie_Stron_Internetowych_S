function dodaj(){
  text=$("#Ztad").val();
    $("#dodejTutej").append("<li>"+text+"</li>");
}

function tyl(){
  text=$("#Ztad").val();
    $("#dodejTutej").prepend("<li>"+text+"</li>");
}

$( "#dodejZPrzodu" ).click(dodaj);

$( "#dodejZTylu" ).click(tyl);