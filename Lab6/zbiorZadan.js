//ZADANIE 2 I 3 (i chyba 6)
$("#zmienKolor").click(function() {  
  $('p').css('color', 'blue');
  $('div').css('color', 'red');
  $('.orange').css('color', 'orange');
})


//ZADANIE 4
$('.AddTekstToUlLi').click(function(){
  if($(this).attr("id") == "DodajNaPoczatek") {
    $('ul').prepend("<li>" + $("#InputList").val() + "</li>");
  }
  else if($(this).attr("id") == "DodajNaKoniec") {
    $('ul').append("<li>" + $("#InputList").val() +  "</li>");
  }
})

//ZADANIE 5 
$("#AddDIVwithPAbovePodstawowy").click(function() {
  $("#mojDiv").prepend("<div><p>"+ Math.random().toString(36).substring(7) +"</p></div>")
});

//ZADANIE 6
$("p").last().addClass('lastP');

//ZADANIE 7
$("#mojZnacznik").hover(function() {
  $(this).css('border', '3px solid black');
});

//ZADANIE 8
$("#h2ParentGreen").click(function() {
  $("h1").parent().css("color", "green");
})


//ZADANIE 9
$("#HideMenu").click(function() {
  $("#MyMenu").hide();
});

$("#ShowMenu").click(function() {
  $("#MyMenu").show();
});

$("#ShowBoxes").click(function(){
  $("#div1").fadeIn();
  $("#div2").fadeIn("slow");
  $("#div3").fadeIn(3000);
});

$("#HideBoxes").click(function(){
  $("#div1").fadeOut();
  $("#div2").fadeOut("slow");
  $("#div3").fadeOut(3000);
}); 


//ZADANIE 10

$("#AnimateBtn").click(function() {
  $(".AnimateBoxInDiv").animate({
    left: '250px',
    height: '+=150px',
    width: '+=150px'
  })
})
