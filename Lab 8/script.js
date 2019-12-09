$(document).ready(function() {
    $('#data').click(function() {
    fetch("https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json")
    .then(response =>{
        response.json().then(json=>{
            gridDataFetch=json
            console.log("data downloaded by fetch")
            console.log(gridDataFetch);
        })
    })
    .catch((err)=>console.error(err))
    });
    $('#data2').click(function() {
        async function fetchAsync(){
            let response = await fetch("https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json");
            let data=await response.json();
            return data;
        }
        fetchAsync()
            .then(data=>console.log(data))
            .catch(reason=>console.log(reason.message))
    });
});
