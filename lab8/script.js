document.querySelector(".btn").addEventListener("click", function() {
  fetch(
    "https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json"
  )
    .then(response => {
      response.json().then(json => {
        gridDataFetch = json;
        console.log("data downloaded by fetch");
        console.log(gridDataFetch);
      });
    })
    .catch(err => console.log(err));
});
