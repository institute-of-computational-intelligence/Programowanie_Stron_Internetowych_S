document.getElementById("getData").addEventListener("click", getDataFunction);

async function getDataFunction(){
    //fetch
    fetch("https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json")
        .then(Response => {
            Response.json().then(json =>{
                gridDataFetch = json
                console.log("data downloaded by fetch")
                console.log(gridDataFetch);
            })
        })
    .catch((err) => console.error(err))

    //await fetch
    try{
        let response = await fetch("https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json");
        let user = await response.json().then(json =>{
            gridDataFetch = json
            console.log("data downloaded by fetch async")
            console.log(gridDataFetch);
        })
    }
    catch(err) { 
        console.error(err);
    }
}