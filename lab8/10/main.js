
$( "#animate" ).click(function() {
  $("#asdf").animate({
    opacity: 0.25,
    left: "+=50"
  },1000
  );
});
var header="1";
$( "#filterf" ).on('input',function() {
      var fil = $( "#filterf" ).val().toLowerCase();
      $("#records_table tr").filter(function() {
        $(this).toggle($(this).eq(header-1).text().toLowerCase().indexOf(fil) > -1)
      }).css("display","none");
      console.log(fil);
});

$( ".radio").click(function (){
  header=$(this).text();
  console.log(header);
});