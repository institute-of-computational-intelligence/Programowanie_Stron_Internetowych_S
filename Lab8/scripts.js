$("#get-data").click(function() {
    $.ajax({
        url: "https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json",

        type: "GET",

        success: function(result) {
            var data = JSON.parse(result);   
            console.log(data);
        },
        error: function(result) {
            alert('error');
        }
    });
});