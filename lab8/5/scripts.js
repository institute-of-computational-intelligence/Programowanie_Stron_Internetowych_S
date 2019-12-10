$(document).ready(function (){
  $.get("https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json",function (data){
  $(function() {
    response = $.parseJSON(data);
    $.each(response, function(i, item) {
        var $tr = $('<tr>').append(
            $('<td>').text(item.title),
            $('<td>').text(item.type),
            $('<td>').text(item.description),
            $('<td>').text(item.filename),
            $('<td>').text(item.height),
            $('<td>').text(item.width),
            $('<td>').text(item.price),
            $('<td>').text(item.rating),
        ).appendTo('#records_table');
        // console.log($tr.wrap('<p>').html());
    });
  });
});
})
