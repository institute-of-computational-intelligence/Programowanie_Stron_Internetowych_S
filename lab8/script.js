var button = document.querySelector("#getData");

button.addEventListener('click', async () => {
    $.ajax({
        url: "https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json",
        type: "GET"
      }).done(function(data) {
        console.log(data);
      });
})
