var gridDataFetch=[]
var gridDataFetchAsync=[]
var gridDatajQueryAjax=[]
var getButton=document.querySelector("#getData");

getButton.addEventListener("click", async (sender)=>{
    //fetch promise
    fetch("https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json")
        .then(response =>{
            response.json().then(json =>{
                gridDataFetch=json
                console.log("data downloaded by fetch")
                console.log(gridDataFetch);
            })
        })
        .catch((err) => console.error(err))

    //fetch await
    try{
        var response = await fetch("https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json")
        gridDataFetchAsync=await response.json()
        console.log("data downloaded by fetch await")
        console.log(gridDataFetchAsync)
    }
    catch(err){
        console.error(err)
    }

    //ajax jquery
    try{
        gridDatajQueryAjax = await $.ajax({
            url: "https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json",
            type: 'GET'
        });
        console.log("data downloaded by ajax")
        console.log(gridDatajQueryAjax)
    }
    catch(err){
        console.error(err);
    }
});
while(gridDatajQueryAjax){

}