
$( "#animate" ).click(function() {
  $("#asdf").animate({
    opacity: 0.25,
    left: "+=50"
  },1000
  );
});
var header="1";
// var ops=new Map({"includes":String.Includes,
//           "startswith":String.startsWith,
//           "endswith":String.endsWith});  
var op;
String.prototype.filtruj = function (text,fil,op){
}
$( "#filterf" ).on('input',function() {
      var fil = $( "#filterf" ).val().toLowerCase();
      $("#records_table tr").filter(function() {
        $(this).toggle($(this).children().eq(header-1).text().toLowerCase().includes(fil))
      }).css("display","none");
      console.log(fil);
});

$( ".radio").click(function (){
  header=$(this).text();
  console.log(header);
});


$( ".op").click(function (){
  op=ops.get($(this).text());
  console.log(op);
});