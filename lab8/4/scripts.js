$( "#bttn" ).click(function() {
    fetch("https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json")
    .then(response => {
        response.json().then(json =>{
            gridDataFetch = json
            console.log("Data downloaded sucessfully")
            console.log(gridDataFetch);
        })
    })
    .catch((err)=>console.error(err))
  });

