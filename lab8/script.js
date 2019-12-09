var button = document.querySelector("#getData");
var table = document.querySelector('table tbody')
button.addEventListener('click', async () => {
    $.ajax({
        url: "https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json",
        type: "GET",
        dataType: 'json'
      }).done(function(data) {
          
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
                 
            $("<tr></tr>").html(el).appendTo(table);
          
            
        });
      });
})
