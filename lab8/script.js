var button = document.querySelector("#getData");
var table = document.querySelector('table tbody');

var gridData;

$.ajax({
    url: "https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json",
    type: "GET",
    dataType: 'json'
  }).done(function(data) {

    gridData = data;
    draw(gridData);
   
  });


$("#filter").click(function(){
    var filtered = gridData.filter(function(single) {
      return single.height == $("#filterField").val();
    });

    draw(filtered);

})

function draw(data) {

  $('table tbody').empty();

  $.each(data, function(i, obj) {

    let el = "<th scope='row'>"+(i+1)+"</th>"+
              "<td>"+obj.title+"</td>"+
              "<td>"+obj.type+"</td>"+
              "<td>"+obj.description+"</td>"+
              "<td>"+obj.filename+"</td>"+
              "<td>"+obj.height+"</td>"+
              "<td>"+obj.width+"</td>"+
              "<td>"+obj.price+"</td>"+
              "<td>"+obj.rating+"</td>";
    $("<tr></tr>").html(el).appendTo('table tbody');
  });

}
