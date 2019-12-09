var button = document.querySelector("#getData");
var table = document.querySelector('table tbody');

var gridData;

$.ajax({
    url: "https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json",
    type: "GET",
    dataType: 'json'
  }).done(function(data) {
      
    $.each(data, function(i, obj) {

        gridData = data;
 
        let el = "<th scope='row'>"+(i+1)+"</th>"+
                 "<td>"+obj.title+"</td>"+
                 "<td>"+obj.type+"</td>"+
                 "<td>"+obj.description+"</td>"+
                 "<td>"+obj.filename+"</td>"+
                 "<td>"+obj.height+"</td>"+
                 "<td>"+obj.width+"</td>"+
                 "<td>"+obj.price+"</td>"+
                 "<td>"+obj.rating+"</td>";
             
        $("<tr></tr>").html(el).appendTo(table);
      
        
    });
  });


$("#filter").click(function(){
    var filterField = $("#filterField").val();

    $.ajax({
        url: "https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json",
        type: "GET",
        dataType: 'json'
      }).done(function(data) {

        $(table).empty();
          
        $.each(data, function(i, obj) {

            if(obj.rating == filterField || filterField.length == 0) {
                let el = "<th scope='row'>"+(i+1)+"</th>"+
                "<td>"+obj.title+"</td>"+
                "<td>"+obj.type+"</td>"+
                "<td>"+obj.description+"</td>"+
                "<td>"+obj.filename+"</td>"+
                "<td>"+obj.height+"</td>"+
                "<td>"+obj.width+"</td>"+
                "<td>"+obj.price+"</td>"+
                "<td>"+obj.rating+"</td>";
            
                $("<tr></tr>").html(el).appendTo(table);
            }
     

           
          
            
        });
      });
})
