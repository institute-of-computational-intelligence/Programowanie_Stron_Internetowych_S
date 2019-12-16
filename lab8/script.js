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
  var filterValue = $("#filterField").val();

    if(filterValue !== undefined && filterValue.length > 0) {


      var selectedOption = $("#filterType").find('option:selected');
      var type = selectedOption.attr('data-type');

      if(type !== undefined && type.length > 0) {
        var filtered = gridData.filter(function(single) {

          if(type === "constains") {
            return single.description.includes(filterValue);
          }
          else if(type === 'start') {
            return single.description.startsWith(filterValue);
          }
          else if(type === 'end') {
            return single.description.endsWith(filterValue);
          }

          
        });
    
        draw(filtered);
      }
      
    }

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
